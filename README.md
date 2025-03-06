# 🌤️ Full-Stack Weather App  

A sleek and responsive full-stack weather application that fetches real-time weather data using the **Visual Crossing Weather API**. The **Flask backend** handles API requests and data parsing, while the **frontend** provides a seamless user experience.  

---

## 🚀 Features  

- 🌎 **Search by City** – Get real-time weather updates for any location  
- 🌡️ **Temperature Unit Toggle** – Switch between Celsius (°C) and Fahrenheit (°F)  
- 📆 **Current Conditions & Forecast** – View today's weather details and alerts  
- 🎨 **Modern UI** – Clean and responsive design for a seamless experience  
- ⚡ **Fast & Lightweight** – Optimized performance with Flask and Webpack  
---

## 🛠️ Technologies Used  

### **Frontend**  
- **JavaScript (ES6+)** – Handles fetching and displaying weather data  
- **HTML & CSS** – Structured layout with a sleek design  
- **Webpack** – Bundles and optimizes code for performance  

### **Backend**  
- **Flask (Python)** – Handles API requests and returns weather data in JSON format  
- **Requests** – Fetches weather data from the Visual Crossing API  
- **dotenv** – Secures API keys  

---

## 📦 Setup & Installation  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app

cd backend
python -m venv .venv  
source .venv/bin/activate  # Windows: .venv\Scripts\activate  
pip install -r requirements.txt  

FLASK_APP=app.py
FLASK_ENV=development
API_KEY=your_api_key_here

python app.py

cd ../frontend
npm install
npm run dev  # Starts the development server

API response format 
{
  "address": "New York, NY",
  "temperature": 72.5,
  "feels_like": 70.2,
  "alert": "Heat Advisory",
  "alert_description": "High temperatures expected."
}