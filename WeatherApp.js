        const cityInput = document.getElementById("cityInput");
        const searchBtn = document.getElementById("searchBtn");
        const message = document.getElementById("message");
        const weatherInfo = document.getElementById("weatherInfo");
        function getWeather(code, isDay) {
            if (code === 0) {
                return {
                    description: "Clear Sky",
                    icon: isDay ? "☀️" : "🌙"
                };
            }
            if (code === 1) {
                return {
                    description: "Mainly Clear",
                    icon: isDay ? "🌤️" : "🌙"
                };
            }
            if (code === 2) {
                return {
                    description: "Partly Cloudy",
                    icon: "⛅"
                };
            }
            if (code === 3) {
                return {
                    description: "Overcast",
                    icon: "☁️"
                };
            }
            if ([45, 48].includes(code)) {
                return {
                    description: "Fog",
                    icon: "🌫️"
                };
            }
            if ([51, 53, 55, 56, 57].includes(code)) {
                return {
                    description: "Drizzle",
                    icon: "🌦️"
                };
            }
            if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
                return {
                    description: "Rain",
                    icon: "🌧️"
                };
            }
            if ([71, 73, 75, 77, 85, 86].includes(code)) {
                return {
                    description: "Snow",
                    icon: "❄️"
                };
            }
            if ([95, 96, 99].includes(code)) {
                return {
                    description: "Thunderstorm",
                    icon: "⛈️"
                };
            }
            return {
                description: "Unknown Weather",
                icon: "🌡️"
            };
        }
        async function getWeatherData(city) {
            try {
                message.innerText = "Loading...";
                message.className = "loading";
                weatherInfo.style.display = "none";
                const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
                const geoResponse = await fetch(geoURL);
                if (!geoResponse.ok) {
                    throw new Error("Unable to search for city.");
                }
                const geoData = await geoResponse.json();
                if (!geoData.results || geoData.results.length === 0) {
                    throw new Error("City not found!");
                }
                const location = geoData.results[0];
                const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&timezone=auto`;
                const weatherResponse = await fetch(weatherURL);
                if (!weatherResponse.ok) {
                    throw new Error("Unable to fetch weather data.");
                }
                const weatherData = await weatherResponse.json();
                const current = weatherData.current;
                const weather = getWeather(
                    current.weather_code,
                    current.is_day
                );
                document.getElementById("cityName").innerText =
                    `${location.name}, ${location.country}`;
                document.getElementById("weatherIcon").innerText =
                    weather.icon;
                document.getElementById("temperature").innerText =
                    `${Math.round(current.temperature_2m)}°C`;
                document.getElementById("description").innerText =
                    weather.description;
                document.getElementById("feelsLike").innerText =
                    `${Math.round(current.apparent_temperature)}°C`;
                document.getElementById("humidity").innerText =
                    `${current.relative_humidity_2m}%`;
                document.getElementById("windSpeed").innerText =
                    `${current.wind_speed_10m} km/h`;
                document.getElementById("precipitation").innerText =
                    `${current.precipitation} mm`;
                weatherInfo.style.display = "block";
                message.innerText = "";
                message.className = "";
            }
            catch (error) {
                message.innerText = error.message;
                message.className = "";
                weatherInfo.style.display = "none";
            }
        }
        searchBtn.addEventListener("click", function() {
            const city = cityInput.value.trim();
            if (city === "") {
                message.innerText = "Please enter a city name!";
                message.className = "";
                weatherInfo.style.display = "none";
                return;
            }
            getWeatherData(city);
        });
        cityInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                searchBtn.click();
            }
        });