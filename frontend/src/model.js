export class Model {
    static async fetchWeather(location) {
        try {
            const link = `http://127.0.0.1:5000/weather?location=${encodeURIComponent(location)}`;
            const response = await fetch(link);
            const data = await response.json();
            console.log(data);
            return data;
        } catch {
            console.error("Fetch error:", error);
            return { error: "City not found" }
        }
    
    }
}