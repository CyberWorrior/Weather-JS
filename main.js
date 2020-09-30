const cityHTML = document.getElementById('city')
const tempHTML = document.getElementById('temp')
const maxTempHTML = document.getElementById('maxtemp')
const minTempHTML  = document.getElementById('mintemp')
const pressureHTML = document.getElementById('press')
const humidityHTML = document.getElementById('humi')
const seaHTML = document.getElementById('sea')
const groundHTML = document.getElementById('ground')


const searchbtn = document.getElementById('search')
const autoGPS = document.getElementById('auto-search')
const error = document.getElementById('error')



const getData = async (lat,lon) =>{
    let mainData
    var url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=1&units=metric&appid=604a547d139d6f02cc29fe1943947ef3`
    const res = await fetch(url)
    const data = await res.json()   
    
    mainData = data.list[0]
    console.log("Weather Data", mainData)
    cityHTML.innerHTML= mainData.name
    tempHTML.innerHTML = mainData.main.temp
    maxTempHTML.innerHTML = mainData.main.temp_max
    minTempHTML.innerHTML = mainData.main.temp_min
    pressureHTML.innerHTML = mainData.main.pressure
    humidityHTML.innerHTML = mainData.main.humidity
    seaHTML.innerHTML = mainData.main.sea_level
    groundHTML.innerHTML = mainData.main.grnd_level
}





searchbtn.addEventListener("click",(e)=>{
    
    e.preventDefault()
    error.innerHTML = "Enter Latitude and Longitude"
    const errorCon = document.getElementById('errorCon')
    errorCon.style.display = "block"
    const lat = document.getElementById('lat').value
    const lon = document.getElementById('lon').value
    if(lat && lon){
        getData(lat,lon)
    }    
})

autoGPS.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!navigator.geolocation){
        console.log("Geolocation is not supported by your browser")
    }else{
        navigator.geolocation.getCurrentPosition(success);
    }
})

const success = (position) =>{
    const lat  = position.coords.latitude;
    const lon= position.coords.longitude;
    getData(lat,lon)
}

