from flask import Flask, jsonify, request 
from flask_cors import CORS 
from weather import get_weather

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World! Weather API is running!"

@app.route("/weather", methods=["GET"])
def fetch_weather():
    city = request.args.get("location")
    return get_weather(city)
    
if __name__ == "__main__":
    app.run(debug=True)

