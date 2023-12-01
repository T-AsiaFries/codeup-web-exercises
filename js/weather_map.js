function fetchWeatherData(lng, lat) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_MAP_API}`)
        .then(response => response.json())
        .then(data => {
            const forecastContainer = document.getElementById('forecast-container')
            // data.list.forEach(item => {
            console.log(data)
            let day = data.list;
            for (let i = 0; i < day.length; i += 8) {
                let weather = day[i];

                const date = new Date(weather.dt * 1000);
                const formattedDate = formatDate(date);
                const temperature = weather.main.temp;
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
                            <p class="top">${temperature} °F</p>
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

// FUNCTION TO CHANGE THE FORMAT OF THE DATE
function formatDate(date) {
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split('/');
    return `${year}-${month}-${day}`;
}

// SEARCH BUTTON
document.getElementById('sub').addEventListener('click', function () {
    const searchInput = document.getElementById('search').value
    console.log('Search Input:', searchInput);
})

// UPDATE FORECAST FUNCTION
// function updateForecast(data) {
//     const forecastContainer = document.getElementById('forecast-container');
//     forecastContainer.innerHTML = ``;
// }

// FUNCTION TO GET WEATHER DATA FROM API
// function fetchWeatherData(lng, lat) {
//     // const { lng, lat } = coordinates;
//
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_MAP_API}`)
//         .then(response => response.json())
//         .then(data => {
//             updateForecast(data);
//         })
//         .catch(error => console.error('Error fetching forecast:', error));
// }


// function getCoordinatesByLocation(locationName) {
//     return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${MAPBOX_API}`)
//         .then(response => response.json())
//         .then(data => {
//             const features = data.features;
//             if (features.length > 0) {
//                 const coordinates = features[0].center;
//                 return { latitude: coordinates[1], longitude: coordinates[0] };
//             } else {
//                 throw new Error('Location not found');
//             }
//         });
//     console.log(getCoordinatesByLocation())
// }
