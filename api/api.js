// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputValue');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');

// Function to fetch and display weather data
const fetchWeather = () => {
    const location = inputvalue.value;
    if (location) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
            .then(response => displayData(response.data))
            .catch(err => alert('Wrong City name'));
    }
};

// Adding event listener to the search button
button.addEventListener('click', fetchWeather);

// Adding event listener for Enter key
document.getElementById("locationForm").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents form from submitting
        fetchWeather(); // Calls fetchWeather function on Enter key press
    }
});

// Function to display weather on HTML document
const displayData = (weather) => {
    temp.innerText = `${weather.main.temp}°C`;
    desc.innerText = `${weather.weather[0].main}`;
};
