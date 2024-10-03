const apiKey = 'jsDu6khGaEp7OQUZ';
const weatherApiUrl = 'https://my.meteoblue.com/packages/basic-1h_basic-day?lat={lat}&lon={lon}&apikey=' + apiKey;

function getWeather(lat, lon) {
    const apiUrl = weatherApiUrl.replace('{lat}', lat).replace('{lon}', lon);
    
    console.log(apiUrl); // Verificar la URL

    // Mostrar loader antes de la petición
    showElement('loader');
    hideElement('weather-container');

    $.get(apiUrl, function(data) {
        console.log(data); // Verificar los datos que llegan desde la API
        
        const currentData = data.data_1h;

        // Ocultar loader y mostrar el contenedor de clima
        hideElement('loader');
        showElement('weather-container');

        if (currentData && currentData.temperature && currentData.temperature.length > 0) {
            const currentTemperature = currentData.temperature[0];
            const snowFraction = currentData.snowfraction[0];
            const rain = currentData.precipitation_probability[0];
            const windSpeed = currentData.windspeed[0];

            let currentCondition;
            let emoji;
            let iconClass = 'wi-day-sunny'; // Icono predeterminado

            if (snowFraction > 0) {
                currentCondition = 'nieve';
                emoji = '❄️';
                iconClass = 'wi-snow';
            } else if (rain > 50) {
                currentCondition = 'lluvia';
                emoji = '🌧️';
                iconClass = 'wi-rain';
            } else if (windSpeed > 10) {
                currentCondition = 'tormenta';
                emoji = '🌩️';
                iconClass = 'wi-storm-showers';
            } else if (currentTemperature < 10) {
                currentCondition = 'frio';
                emoji = '🧊';
                iconClass = 'wi-thermometer';
            } else {
                currentCondition = 'despejado';
                emoji = '☀️';
                iconClass = 'wi-day-sunny';
            }

            document.body.className = currentCondition;

            document.getElementById('temperature').innerText = `${currentTemperature}°C`;
            document.getElementById('condition').innerText = `Condición: ${currentCondition.charAt(0).toUpperCase() + currentCondition.slice(1)}`;
            document.getElementById('wind-speed').innerText = `Velocidad del viento: ${windSpeed} m/s`;
            document.getElementById('emoji').innerText = emoji;
            document.getElementById('weather-icon').className = `wi ${iconClass}`;

            updateClock();
            setInterval(updateClock, 1000);

            // Mostrar pronóstico a 3 días con nombres de días
            const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

            if (data.data_day && data.data_day.temperature_max.length > 0) {
                const today = new Date();
                for (let i = 0; i < 3; i++) {
                    const forecastDate = new Date(today);
                    forecastDate.setDate(today.getDate() + i + 1); // Sumar días

                    document.getElementById(`forecast-day-${i + 1}`).innerHTML = `
                        <strong>${daysOfWeek[forecastDate.getDay()]}:</strong> 
                        Max: ${data.data_day.temperature_max[i]}°C, 
                        Min: ${data.data_day.temperature_min[i]}°C
                    `;
                }
            }
        } else {
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = '<h2>No se pudo obtener el clima.</h2>';
        }
    }).fail(function() {
        hideElement('loader');
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = '<h2>No se pudo conectar con la API de clima.</h2>';
    });
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            $.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, function(locationData) {
                const userLocation = locationData.address.town || locationData.address.city || locationData.address.village || "Desconocido";
                document.getElementById('location').innerText = `Ubicación: ${userLocation}`;
            });

            getWeather(lat, lon);
        }, function() {
            alert("No se pudo obtener la ubicación. Mostrando clima de Zacatecas.");
            getWeather(47.558, 7.573); // Ubicación por defecto
        });
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

function updateClock() {
    const currentTime = new Date();
    document.getElementById('current-time').innerText = `Hora actual: ${currentTime.toLocaleTimeString()}`;
}

function showElement(id) {
    document.getElementById(id).style.display = 'block';
}

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}

getLocation();
