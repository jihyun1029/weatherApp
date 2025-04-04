import React from "react";

const WeatherBox = ({weather}) => {
    console.log("weather", weather);

    const celsius = weather?.main.temp;
    const fahrenheit = celsius ? (celsius * 1.8 + 32).toFixed(2) : null;

    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>{celsius}°C / {fahrenheit}°F</h2> {/*화씨 = 섭씨*1.8 + 32*/}
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox;