import React from 'react'

function Showtemp({text}) {
  return (
    <div>
      <label>description </label>
      <p>{text.description}</p>
      <label>Temperature</label>
      <p>{text.temp}</p>
      <label>feels like</label>
      <p>{text.feels_like}</p>
      <label>Minimum Temperature</label>
      <p>{text.temp_min}</p>
      <label>Maximum Temperature</label>
      <p>{text.temp_max}</p>
      <label>Air pressure</label>
      <p>{text.pressure}</p>
      <label>Humidity</label>
      <p>{text.humidity}</p>
      <label>Air Speed</label>
      <p>{text.speed}</p>
      <label>Air Dag</label>
      <p>{text.dag}</p>
      <label>clouds</label>
      <p>{text.clouds}</p>
      <label>Sun Rise time</label>
      <p>{text.sunrise}</p>
      <label>sun set time</label>
      <p>{text.sunset}</p>
    </div>
  )
}

export default Showtemp
