import React from "react";
import {Button} from 'react-bootstrap';

const WeatherButton = ({cities, setCity, selectedCity}) => {
    // console.log("cities?", cities);

    return (
        <div className="cityBtn">
            <Button variant={selectedCity === "" ? "warning" : "outline-warning"} onClick={() => setCity("")}>Current Location</Button>
            {cities.map((item, index) => (
                <Button
                    variant={selectedCity === item ? "warning" : "outline-warning"}
                    // variant="warning"
                    key={index}
                    onClick={() => setCity(item)}
                >
                    {item}
                </Button>
            ))}
        </div>
    )
}

export default WeatherButton