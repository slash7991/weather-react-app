import axios from "axios";
import React, { useState } from "react";
import Showtemp from "./Showtemp";

function SearchPage() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    speed: 0,
    dag: 0,
    clouds: 0,
    
  });
  const searchCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=85457e6c88c9889414ed70fc3fb9b6ff`
      )
      .then((response) => {
        console.log(response.data);
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          feels_like: response.data.main.feels_like,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          speed: response.data.wind.speed,
          dag: response.data.wind.dag,
          clouds: response.data.clouds.all,
          
        });
      });
  };
  return (
    <div>
      <div>
        <h2> Search city </h2>
      </div>
      <input
        type="text"
        id="search"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br></br>
      <button type="submit" title="search city" onClick={searchCity}>
        search
      </button>
      <br></br>
      <Showtemp text={data}></Showtemp>
    </div>
  );
}

export default SearchPage;
