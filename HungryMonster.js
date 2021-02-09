const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('food').value;
    getWeatherData(inputFood);
})


