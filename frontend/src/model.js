export class Model {
    static async fetchWeather(location) {
        try {
            const link = `http://127.0.0.1:5000/weather?location=${encodeURIComponent(location)}`;
            const response = await fetch(link);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("City not found");
                } else if (response.status === 500) {
                    throw new Error("Server error. Try again later.");
                } else {
                    throw new Error(`Unexpected error: ${response.status}`);
                }
            }
1
            const data = await response.json();
            console.log(data);
            return data;
        } catch {
            console.error("Fetch error:", error);
            return { error: "City not found" }
        }
    
    }
}