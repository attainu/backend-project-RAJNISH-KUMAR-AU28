const cityname = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal===""){
        city_name.innerText = `Plz Write The name Before search`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}appid=a2d440d5b3d00c0d5d31e35ce0e69e3e`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
        }catch{
            city_name.innerText = `Plz Enter The City Name Properly`
        }
        
    }

}

submitBtn.addEventListener('click', getInfo);

