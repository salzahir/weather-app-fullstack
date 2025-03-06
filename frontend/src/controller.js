import { View } from "./view";
import { Model } from "./model";

export class Controller {

    constructor() {
        this.searchInput = document.querySelector(".search-bar");
        this.searchButton = document.getElementById("search");
        this.isCelsius = document.getElementById("unitToggle");

        this.searchButton.addEventListener("click", async () => {
            const location = this.searchInput.value;
            if(!this.validateLocation(location)) {
                return;
            };
            const data = await Model.fetchWeather(location);
            console.log(data);
            View.displayWeatherData(data, this.isCelsius.checked);
        });
    }

    validateLocation(location) {
        if (!location) {
            alert("Please enter a location");
            return false;
        }
        return true;
    }

}


