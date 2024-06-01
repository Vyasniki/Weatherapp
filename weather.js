const apiKey = "3f31feeedf7c80578a6abe02ddab49af";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector("#city");
console.log(searchBox.value);
const btn = document.querySelector(".search button");
const img = document.querySelector(".weather-icon");
const weathercls = document.querySelector(".weather");
async function weatherdata(cityname){
    const response = await fetch(apiUrl  + `${cityname}` + `&appid=${apiKey}`);
    if (!response.ok) {
        throw new Error(`City not found: ${response.statusText}`);
    }
    var data = await response.json();
   
console.log(data);
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


    if(data.weather[0].main== "Clouds"){

        img.src="images/cloudy.png";
    } else if(data.weather[0].main== "Clear"){

        img.src="images/clear.png";
    }else if(data.weather[0].main== "Drizzle"){

        img.src="images/drizzle.png";
    }else if(data.weather[0].main== "Rain"){

        img.src="images/rain.png";
    }else if(data.weather[0].main== "Snow"){

        img.src="images/snow.png";
    }
}



btn.addEventListener("click", ()=> {
    weatherdata(searchBox.value);
    weathercls.style.display = "block";
})
// weatherdata();
