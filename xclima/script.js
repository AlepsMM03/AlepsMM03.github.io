const apiKey = 'jsDu6khGaEp7OQUZ';
const weatherApiUrl = 'https://my.meteoblue.com/packages/basic-1h_basic-day?lat={lat}&lon={lon}&apikey=' + apiKey;

function getWeather(lat, lon) {
    const apiUrl = weatherApiUrl.replace('{lat}', lat).replace('{lon}', lon);
    
    $.get(apiUrl, function(data) {
        //console.log(data); // Ver la respuesta de la API en la consola
        const currentData = data.data_1h;

        if (currentData && currentData.temperature && currentData.temperature.length > 0) {
            const currentTemperature = currentData.temperature[0]; // Temperatura actual
            const snowFraction = currentData.snowfraction[0]; // Fracción de nieve
            const rain = currentData.precipitation_probability[0]; // Probabilidad de precipitación
            const windSpeed = currentData.windspeed[0]; // Velocidad del viento
            
            // Obtener la hora local
            const currentTime = new Date(); // Hora local actual
            const localTimezone = data.metadata.timezone_abbrevation; // Zona horaria

            // Cambia el fondo según la condición
            let currentCondition;
            let emoji;

            // Determina la condición climática
            if (snowFraction > 0) {
                currentCondition = 'nieve'; // Nombre de la clase en español
                emoji = '❄️'; // Emoji de nieve
            } else if (rain > 50) {
                currentCondition = 'lluvia'; // Nombre de la clase en español
                emoji = '🌧️'; // Emoji de lluvia
            } else if (windSpeed > 10) {
                currentCondition = 'tormenta'; // Nombre de la clase en español
                emoji = '🌩️'; // Emoji de tormenta
            } else if (currentTemperature < 10) {
                currentCondition = 'frio'; // Nombre de la clase en español
                emoji = '🧊'; // Emoji de frío
            } else {
                currentCondition = 'despejado'; // Nombre de la clase en español
                emoji = '☀️'; // Emoji de sol
            }

            // Cambia la clase del body para el fondo
            document.body.className = currentCondition; // Aplica la clase correspondiente al body

            // Mostrar la ubicación del usuario
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.className = 'weather';

            document.getElementById('temperature').innerText = `${currentTemperature}°C`;
            document.getElementById('condition').innerText = `Condición: ${currentCondition.charAt(0).toUpperCase() + currentCondition.slice(1)}`;
            document.getElementById('wind-speed').innerText = `Velocidad del viento: ${windSpeed} m/s`;
            document.getElementById('emoji').innerText = emoji; // Muestra el emoji

            // Mostrar la hora actual
            updateClock(); // Llama a la función para actualizar la hora
            setInterval(updateClock, 1000); // Actualiza la hora cada segundo

        } else {
            const weatherContainer = document.getElementById('weather-container');
            weatherContainer.innerHTML = '<h2>No se pudo obtener el clima.</h2>';
        }
    }).fail(function() {
        console.error('Error al obtener los datos del clima.');
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = '<h2>No se pudo conectar con la API de clima.</h2>';
    });
}

// Obtener la ubicación del usuario y convertir las coordenadas a un nombre de lugar
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Obtener el nombre del lugar usando Nominatim
            $.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, function(locationData) {
                const userLocation = locationData.address.town || locationData.address.city || locationData.address.village || "Desconocido";
                document.getElementById('location').innerText = `Ubicación: ${userLocation}`;
            });

            getWeather(lat, lon); // Llama a la función con la ubicación del usuario
        }, function() {
            alert("No se pudo obtener la ubicación. Mostrando clima de Zacatecas.");
            getWeather(47.558, 7.573); // Default a Zacatecas si falla
        });
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

// Función para actualizar la hora en tiempo real
function updateClock() {
    const currentTime = new Date(); // Hora local actual
    document.getElementById('current-time').innerText = `Hora actual: ${currentTime.toLocaleTimeString()}`; // Muestra la hora
}

getLocation(); // Obtiene la ubicación del usuario
