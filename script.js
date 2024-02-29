let resultsBox = document.getElementById('result-box')
console.log(resultsBox)
let cityInput = document.getElementById('location-input')

const weatherKey = 'df52b37f7ec843cfb5d191317242902'
let weatherAPI = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&aqi=no&q=`

async function getWeatherData() {
    unhideBox()
    clearResults()
    let inputResult = cityInput.value
    console.log(inputResult)
    weatherAPI += inputResult
    console.log(weatherAPI)
    let initialData = await fetch(weatherAPI, {mode: 'cors'})
    let locationData = await initialData.json()
    console.log(locationData)
    let locationName = locationData.location.name
    let locationTime = locationData.location.localtime
    let locationTemp = locationData.current["temp_f"]
    let conditions = locationData.current.condition.text
    let locationConditions = conditions.toLowerCase()

    console.log(locationName)
    console.log(locationTime)
    console.log(locationTemp)
    console.log(locationConditions)

    resultsBox.innerHTML += `
    <h2>It is currently ${locationTime} in ${locationName}.</h2><br> <h2>The weather is currently ${locationTemp}F and ${locationConditions}.</h2>`

    let wholeNum = weatherAPI.length
    let cityNum = inputResult.length
    let toSubtract = wholeNum - cityNum
    weatherAPI = weatherAPI.substring(0, toSubtract)
    console.log(weatherAPI)
}

function clearResults() {
    resultsBox.innerHTML = ''
}

function unhideBox() {
    resultsBox.classList.remove('hidden')
}