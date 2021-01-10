let weather = document.getElementById("weather")
let city = document.getElementById("city");
let div;
city.addEventListener("change", changeCity);
function changeCity() {
    if (city.value != "...") {
		async function fetchGet(url) {
			let fetchData = await fetch(url);
            let jsonData =  await fetchData.json();
            div = document.createElement("div");
            div.innerHTML=`<img class="icon" src="http://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png">`;
            weather.append(div);
            div = document.createElement("div");
			div.innerHTML=`<p> Город: ${jsonData.name}</p>`;
            weather.append(div);
            div = document.createElement("div");
			div.innerHTML=`<p> Страна: ${jsonData.sys.country}</p>`;
            weather.append(div);
            div = document.createElement("div");
			div.innerHTML=`<p> Темперетура: ${jsonData.main.temp} °C, ощущается как ${jsonData.main.feels_like} °C </p>`;
            weather.append(div);
            div = document.createElement("div");
			div.innerHTML=`<p>Минимальная температура: ${jsonData.main.temp_min} °C, Максимальная температура ${jsonData.main.temp_max} °C</p>`;
            weather.append(div);
        }
        clear();
        fetchGet(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=1eded5cc74ced159ec69ba2c155de403&units=metric&lang=ru`);
    }
}
function clear() {
	weather.innerHTML="";
}