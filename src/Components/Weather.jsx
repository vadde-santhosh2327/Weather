import React, { useState } from "react";
import '../../src/App.css';

export default function Weather() {
    let api = {
        key: "2a687908aeebc85d521efc4dfc18890c",
        url: "https://api.openweathermap.org/data/2.5/weather"
    };

    let [search, setSearch] = useState({});
    let [weather, SetWeather] = useState([]);
    let [loading, setLoading] = useState(false);
    let SearchWeather = () => {
        setLoading(true);
        // https://openweathermap.org/find?q=jeypore
        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
            .then(res => res.json())
            .then(value => {SetWeather(value)
                console.log(value);
                setLoading(false)})
                .catch((e)=>{setLoading(false)})
                
    }
    
    
    let Onkey = (e) => {
        if (e.key === "Enter") {
            SearchWeather()
        }
    }

    
    return (
        <div>
            <h1>Welcome To Weather Forecasting </h1>
            <section>
                <div id="inputDiv">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyPress={Onkey} placeholder="Search For City"/>
                </div>
                <button onClick={SearchWeather}  >Search</button>
            </section>
            {loading ? <p>Loadings...</p> :
                (weather.main !== undefined) ?
                    (
                        <><br />
                            <h3>{weather.name}</h3>
                            <p>{weather.main.temp}° Celcius</p>
                            <p>Feels Like: {weather.main.feels_like}° Celcius</p>
                            <p>Humidity: {weather.main.humidity}</p>
                            <p>Weather: {weather.weather[0].main}</p>
                            <p>Looks Like: {weather.weather[0].description}</p>
                        </>
                    ) : ("")}
        </div>

    )
}
