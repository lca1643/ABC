/**
 * CLIMA DASHBOARD - Integración Real
 * Aprendizaje: Fetch API, Async/Await y Manejo de JSON Real.
 */

// 1. Configuración de API (OpenWeatherMap)
// NOTA: El usuario debe poner su propia API Key aquí.
const API_KEY = 'e6168ed01917302a01e61958096f36f7';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// 2. Selección de elementos del DOM
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityNameEl = document.getElementById('city-name');
const weatherDescEl = document.getElementById('weather-desc');
const tempEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const uvIndexEl = document.getElementById('uv-index');
const countryTagEl = document.getElementById('country-tag');
const dateTimeEl = document.getElementById('date-time');

// Reloj en tiempo real
function actualizarReloj() {
    const ahora = new Date();
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeEl.innerText = ahora.toLocaleDateString('es-ES', opciones);
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// Instancia del Mapa
let map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OSM'
}).addTo(map);
let marker = L.marker([0, 0]).addTo(map);

// 3. Event Listeners
searchBtn.addEventListener('click', () => {
    obtenerClima(cityInput.value);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        obtenerClima(cityInput.value);
    }
});

/**
 * Función Principal para obtener el clima
 */
async function obtenerClima(ciudad) {
    if (!ciudad) return;

    // Estado de carga
    cityNameEl.innerText = "Buscando...";
    searchBtn.disabled = true;

    try {
        // --- LÓGICA HÍBRIDA: SIMULACIÓN O API REAL ---
        if (API_KEY === 'YOUR_API_KEY_HERE') {
            console.log("INFO: Usando modo SIMULACIÓN. Para datos reales, pon tu API Key en la línea 8.");
            const datos = await simularRespuestaAPI(ciudad);
            actualizarUI(datos);
            return;
        }

        const url = `${BASE_URL}?q=${encodeURIComponent(ciudad)}&appid=${API_KEY}&units=metric&lang=es`;
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) throw new Error("Ciudad no encontrada");
            if (response.status === 401) throw new Error("API Key inválida o inactiva");
            throw new Error("Error en la conexión");
        }

        const datos = await response.json();
        actualizarUI(datos);

    } catch (error) {
        console.error("Error:", error.message);
        cityNameEl.innerText = error.message;
        weatherDescEl.innerText = "Revisa la consola para más detalles.";
        // Reset de campos
        tempEl.innerText = "--";
        humidityEl.innerText = "--";
        windEl.innerText = "--";
    } finally {
        searchBtn.disabled = false;
    }
}

/**
 * Mapea los datos a la Interfaz
 */
function actualizarUI(datos) {
    // Adaptar datos si vienen de la API real o de la simulación
    const nombre = datos.name;
    const desc = datos.weather ? datos.weather[0].description : datos.description;
    const temp = datos.main ? datos.main.temp : datos.temp;
    const humedad = datos.main ? datos.main.humidity : datos.humidity;
    const viento = datos.wind ? (datos.wind.speed * 3.6) : datos.wind; // km/h
    const pais = datos.sys ? datos.sys.country : datos.country;
    const coords = datos.coord ? [datos.coord.lat, datos.coord.lon] : [datos.lat, datos.lon];

    // 1. Datos básicos
    cityNameEl.innerText = nombre;
    weatherDescEl.innerText = desc;
    tempEl.innerText = Math.round(temp);

    // 2. Detalles
    humidityEl.innerText = `${Math.round(humedad)}%`;
    windEl.innerText = `${Math.round(viento)} km/h`;
    countryTagEl.innerText = pais;
    uvIndexEl.innerText = datos.uvIndex || "N/A";

    // 3. Mapa
    map.setView(coords, 12);
    marker.setLatLng(coords);
    setTimeout(() => map.invalidateSize(), 400);

    // 4. Color de fondo dinámico
    const body = document.body;
    const d = desc.toLowerCase();

    if (d.includes('despejado') || d.includes('sol')) {
        body.style.setProperty('--bg-color', '#ff9f43');
    } else if (d.includes('nube') || d.includes('bruma') || d.includes('niebla')) {
        body.style.setProperty('--bg-color', '#54a0ff');
    } else if (d.includes('lluvia') || d.includes('llovizna')) {
        body.style.setProperty('--bg-color', '#2e86de');
    } else if (d.includes('nieve')) {
        body.style.setProperty('--bg-color', '#eeeff1');
        body.style.color = '#333';
    } else if (d.includes('tormenta')) {
        body.style.setProperty('--bg-color', '#4834d4');
    }
}

/**
 * FUNCIÓN REESTABLECIDA: Simular Internet (Modo Demo)
 */
function simularRespuestaAPI(ciudad) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockData = {
                name: ciudad.charAt(0).toUpperCase() + ciudad.slice(1),
                temp: 15 + Math.random() * 15,
                description: "cielo despejado",
                humidity: 40 + Math.random() * 40,
                wind: 5 + Math.random() * 15,
                country: "INT",
                lat: 40.4168,
                lon: -3.7038
            };

            const lowCity = ciudad.toLowerCase();
            if (lowCity.includes('madrid')) { mockData.country = "ES"; mockData.lat = 40.4168; mockData.lon = -3.7038; }
            else if (lowCity.includes('londres')) { mockData.description = 'lluvia ligera'; mockData.country = "GB"; mockData.lat = 51.5074; mockData.lon = -0.1278; }
            else if (lowCity.includes('méxico')) { mockData.description = 'nubes dispersas'; mockData.country = "MX"; mockData.lat = 19.4326; mockData.lon = -99.1332; }

            resolve(mockData);
        }, 1000);
    });
}
