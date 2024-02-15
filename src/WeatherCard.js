import React, { useState, useEffect } from 'react';

const WeatherCard = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/cities')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  const handleCityChange = (event) => {
    const selectedCityIndex = event.target.value;
    setSelectedCity(cities[selectedCityIndex]);
  };

  if (cities.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-card">
      <label htmlFor="citySelector">Select a City: </label>
      <select id="citySelector" onChange={handleCityChange} defaultValue="">
        <option value="" disabled hidden>Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={index}>
            {`${city.name}, ${city.country}`}
          </option>
        ))}
      </select>

      {selectedCity && (
        <>
          <h2>{`${selectedCity.name}, ${selectedCity.country}`}</h2>
          <p>Current Temperature: {selectedCity.current.temperature}°C</p>
          <p>Weather Conditions: {selectedCity.current.description}</p>
          <p>Humidity: {selectedCity.current.humidity}%</p>
          <p>Wind Speed: {selectedCity.current.wind_speed} km/h</p>

          <h3>Forecast:</h3>
          <ul>
            {selectedCity.forecast.map(item => (
              <li key={item.date}>
                {item.date}: {item.temperature_min}°C - {item.temperature_max}°C, {item.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WeatherCard;