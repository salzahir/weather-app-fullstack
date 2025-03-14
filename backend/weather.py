import os
import requests
from dotenv import load_dotenv
from flask import jsonify

load_dotenv()
API_KEY = os.getenv("API_KEY")

# Check if API_KEY is present
if not API_KEY:
    raise ValueError("API_KEY is missing. Please check your .env file.")

def get_weather(city):
    if not city:
        return jsonify({"error": "Missing location parameter"}), 400

    url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}?key={API_KEY}"

    try:
        response = requests.get(url)
        if response.status_code == 200:
            return parse_json(response.json())
        else:
            return jsonify({"error": f"Status code {response.status_code}", "response": response.text}), response.status_code
    except Exception as e:
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500
    
def parse_json(response):

    address = response.get("address", "Unknown address") 
    days = response.get("days", [])

    if not days:
        return jsonify({"error": "No weather data available"}), 500
    
    current_day = days[0] 
    temp = current_day.get("temp")
    feelslike = current_day.get("feelslike")
    datetime = current_day.get("datetime")
    conditions = current_day.get("conditions")
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