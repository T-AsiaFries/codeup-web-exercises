function fetchWeatherData(lng, lat) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_MAP_API}`)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast-container')
            console.log(data)
            let day = data.list;
            for (let i = 0; i < day.length; i += 8) {
                let weather = day[i];

                const date = new Date(weather.dt * 1000);
                const formattedDate = formatDate(date);
                const temperature = weather.main.temp;
                const tempFahrenheit = tempChange(temperature);
                const description = weather.weather[0].description;
                const humidity = weather.main.humidity;
                const wind = weather.wind.speed;
                const pressure = weather.main.pressure;

                const forecastCard = document.createElement('div');
                forecastCard.classList.add('forecast-card', 'col-md-2');
                forecastCard.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <p class="top">${formattedDate}</p>
                    </div>
                     <div class="card-body">
                        <div>
                            <p class="top">${tempFahrenheit.toFixed(2)} °F</p>
                            <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="Weather Icon" class="weather-icon">
                        </div>
                         <ul class="list-group list-group-flush">
                        <li class="list-group-item">Description: ${description}</li>
                        <li class="list-group-item">Humidity: ${humidity}</li>
                        <li class="list-group-item">Wind: ${wind}</li>
                        <li class="list-group-item">Pressure: ${pressure}</li>
                    </ul>
                    </div>
                </div>
            `;
                forecastContainer.appendChild(forecastCard);
            }

        })
        .catch(error => console.error('Error:', error))
}


fetchWeatherData(-96.804112, 32.778842)

// FUNCTION TO CHANGE THE FORMAT OF THE DATE TO YYYY-MM-DD
function formatDate(date) {
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split('/');
    return `${year}-${month}-${day}`;
}

// FUNCTION TO CHANGE THE TEMPERATURE FROM CELSIUS TO FAHRENHEIT
function tempChange(kelvin) {
    const fahr = (kelvin - 273.15) * 9/5 + 32;
    return fahr;
}

// FIND BUTTON FUNCTION THAT USES GEOCODE TO GET THE LOCATION FOR THE SEARCHED INPUT
document.getElementById('find').addEventListener('click', function () {
    const searchInput = document.getElementById('search').value;
    geocode(searchInput, MAPBOX_API).then(result => {
        map.setCenter(result);
        map.setZoom(12);
        marker.remove();
        // ADDING A MARKER FOR THE NEW SEARCHED INPUT
        const newMarker = new mapboxgl.Marker({
            color: "#017BFE",
            draggable: true
        }).setLngLat(result)
            .addTo(map);
        markerCoordinates = newMarker.getLngLat();

        fetchWeatherData(markerCoordinates.lng, markerCoordinates.lat);
        const container = document.getElementById('forecast-container');
        container.innerHTML = '';
    });
});