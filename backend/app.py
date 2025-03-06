from flask import Flask, jsonify, request
import requests
from dotenv import load_dotenv
from flask_cors import CORS
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("API_KEY")

# Check if API_KEY is present
if not API_KEY:
    raise ValueError("API_KEY is missing. Please check your .env file.")

@app.route("/")
def home():
    return "Hello, World! Weather API is running!"

@app.route("/weather", methods=["GET"])
def get_weather():

    city = request.args.get("location")
    if not city:
        return jsonify({"error": "Missing location parameter"}), 400
    
    url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?key={API_KEY}"

    try:
        response = requests.get(url)
        if response.status_code == 200:
            return parse_json(response.json())
        else:
            return f"Error: Status code {response.status_code}, Response: {response.text}"
    except Exception as e:
            return f"Exception occurred: {str(e)}"


def parse_json(response):
    address = response["address"]
    current_day = response["days"][0]  # Ensure 'days' exists in the API response
    temp = current_day["temp"]
    feelslike = current_day["feelslike"]
    datetime = current_day["datetime"]
    conditions = current_day["conditions"]

    # Handle alerts
    alerts = response.get("alerts", [])

    return jsonify({
        "address": address,
        "days": [
            {
                "datetime": datetime,
                "conditions": conditions,
                "temp": temp,
                "feelslike": feelslike
            }
        ],
        "alerts": alerts 
    })

if __name__ == "__main__":
    app.run(debug=True)


