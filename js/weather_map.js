// fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Irving&appid=${WEATHER_MAP_API}`)
//     .then(response => response.json())
//     .then(data => {
//         const forecastContainer = document.getElementById('forecast')
//         data.list.forEach(item => {
//             const date = new Date(item.dt * 1000);
//             const temperature = item.main.temp;
//             const icon = item.weather[0].icon;
//
//
//             const forecastCard = document.createElement('div');
//             forecastCard.classList.add('col-md-2', 'mb-3');
//             forecastCard.innerHTML = `
//                     <p>${date.toDateString()}</p>
//                     <p>${temperature} °C</p>
//                     <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
//                    `;
//         });
//         forecastContainer.appendChild(forecastCard);
//     })
//     .catch(error => console.error('Error fetching forecast:', error));
// })