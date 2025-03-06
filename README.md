# 🌤️ Full-Stack Weather App

A sleek and responsive full-stack weather application that fetches real-time weather data using the **Visual Crossing Weather API**. The **Flask backend** handles API requests and data parsing, while the **frontend** provides a seamless user experience.

## 🚀 Features

- 🌎 **Search by City** – Get real-time weather updates for any location.
- 🌡️ **Temperature Unit Toggle** – Switch between Celsius (°C) and Fahrenheit (°F).
- 📆 **Current Conditions & Forecast** – View today's weather details and alerts.
- 🎨 **Modern UI** – Clean and responsive design for a seamless experience.
- ⚡ **Fast & Lightweight** – Optimized performance with Flask and Webpack.

## 🛠️ Technologies Used

### **Frontend**
- **JavaScript (ES6+)** – Handles fetching and displaying weather data.
- **HTML & CSS** – Structured layout with a sleek design.
- **Webpack** – Bundles and optimizes code for performance.

### **Backend**
- **Flask (Python)** – Handles API requests and returns weather data in JSON format.
- **Requests** – Fetches weather data from the Visual Crossing API.
- **dotenv** – Secures API keys.

## 📦 Setup & Installation

🚀 Weather App - Setup Instructions

1️⃣ Clone the Repository

git clone https://github.com/salzahir/weather-app.git
cd weather-app

2️⃣ Set Up Backend

cd backend
python -m venv .venv

source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

3️⃣ Configure Environment Variables

Create a .env file in the backend directory with the following content:

FLASK_APP=app.py
FLASK_ENV=development
API_KEY=your_api_key_here

4️⃣ Start the Backend Server

python app.py

5️⃣ Set Up Frontend

cd ../frontend
npm install
npm run dev

📊 API Response Format

The API returns weather data in the following JSON format:

{
  "address": "New York, NY",
  "temperature": 72.5,
  "feels_like": 70.2,
  "alert": "Heat Advisory",
  "alert_description": "High temperatures expected."
}

📝 License

This project is licensed under the MIT License.

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

🔥 Now you're ready to build and run the Weather App! ☂️💻

