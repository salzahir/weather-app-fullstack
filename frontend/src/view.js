export class View {
    static displayErrorMessage(data, weatherInfo) {
        if (data.error) {
            const error = document.createElement("h2");
            error.textContent = data.error;
            weatherInfo.appendChild(error);
            return;
        }
    }

    static displayTemperature(temp, isCelsius) {
        const temperature = document.createElement("p");
        temperature.textContent = `Temperature: ${temp}°${isCelsius ? "C" : "F"}`;
        return temperature;
    }

    // Add the hasAlerts method to the View class. This method should take in the alertsData parameter and return true if the alertsData is not empty and false otherwise.
    static hasAlerts(alertsData) {
        return Array.isArray(alertsData) && alertsData.length > 0;
    }

    static displayAlerts(alertsData) {
        const alerts = document.createElement("p");
        if (!View.hasAlerts(alertsData)) {
            alerts.textContent = "No weather alerts";
        } else { 
            alerts.textContent = `Weather event: ${alertsData[0].event}\nDescription: ${alertsData[0].description}`;   
         }
        return alerts;
    }

    static displayLocation(address) {
        const location = document.createElement("h2");
        location.textContent = `Location: ${address}`;
        return location;
    }

    static displayFeelsLike(feelsLikeData) {
        const feelsLike = document.createElement("p");
        feelsLike.textContent = `Feels like: ${feelsLikeData}°F`;
        return feelsLike;
    }

    static displayDate(dateData) {
        const date = document.createElement("p");
        date.textContent = `Today's Date: ${dateData}`;
        return date;
    }

    static displayDescription(descriptionData) {
        const description = document.createElement("p");
        description.textContent = descriptionData;
        return description;
    }
    
     static displayWeatherData(data, isCelsius) {
    
        const weatherInfo = document.querySelector(".weather-info");
        weatherInfo.innerHTML = "";
    
        View.displayErrorMessage(data, weatherInfo);
    
        const location = View.displayLocation(data.address);
        weatherInfo.appendChild(location);

        const date = View.displayDate(data.days[0].datetime);
        weatherInfo.appendChild(date);

        const description = View.displayDescription(data.days[0].conditions);
        weatherInfo.appendChild(description);
        
        const temperature = View.displayTemperature(data.days[0].temp, isCelsius);
        weatherInfo.appendChild(temperature);
    
        const feelsLike = View.displayFeelsLike(data.days[0].feelslike);
        weatherInfo.appendChild(feelsLike);
    
        const alerts = View.displayAlerts(data.alerts);
        weatherInfo.appendChild(alerts);
    }
}



