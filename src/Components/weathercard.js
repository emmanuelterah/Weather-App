import React, { useState, useEffect } from 'react';

import clear from '../assests/icons/clear.png';
import cloud from '../assests/icons/cloud.png';
import partlycloudy from '../assests/icons/partly cloudy.png';
import rain from '../assests/icons/rain.png';
import sun from '../assests/icons/sun.png';


// const WeatherCard = () => {
//   const [cities, setCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [icon, setIcon]= useState(sun)

const WeatherCard = () => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [icon, setIcon] = useState('cloud');

useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch('http://localhost:8001/cities');
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchCityData();
  }, []);


const handleCityChange = (event) => {
    const selectedCityIndex = event.target.value;
    setSelectedCity(cities[selectedCityIndex]);
  };


useEffect(() => {
    if (selectedCity && selectedCity.current) {
      const description = selectedCity.current.description.toLowerCase();
      if (description.includes('cloud')) {
        setIcon(cloud);
      } else if (description.includes('rain')) {
        setIcon(rain);
      } else if (description.includes('sun')) {
        setIcon(sun);
      } else if (description.includes('clear')) {
        setIcon(clear);
      } else if (description.includes('partly cloudy')) {
        setIcon(partlycloudy);
      }
    
    }
  }, [selectedCity]);


return (
    <div className="weather-card">
        <div className='text-center'>
      <label htmlFor="citySelector" className='fs-4 text-center'>Select a City: </label>
      <select id="citySelector" onChange={handleCityChange} defaultValue="">
        <option value="" disabled hidden>Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={index}>
            {`${city.name}, ${city.country}`}
          </option>
        ))}
      </select>
      </div>
      
        
      {selectedCity && (
        <div className='container py-5'>
        <div className='card text-bg-info mb-3 bg-opacity-10' style={{width: '25rem'}}>
            <img src={icon} className='card-img-top mx-auto p-5' alt='weather'/>
            <div className='card-body'>
                <h2 className='card-title text-center'>{`${selectedCity.name}, ${selectedCity.country}`}</h2>
            </div>
            <ul className='list-group list-group-flush'>
          <li className='list-group-item text-bg-info mb-3 bg-opacity-10'>Current Temperature: {selectedCity.current.temperature}°C</li>
          <li className='list-group-item text-bg-info mb-3 bg-opacity-10'>Weather Conditions: {selectedCity.current.description}</li>
          <li className='list-group-item text-bg-info mb-3 bg-opacity-10'>Humidity: {selectedCity.current.humidity}%</li>
          <li className='list-group-item text-bg-info mb-3 bg-opacity-10'>Wind Speed: {selectedCity.current.wind_speed} km/h</li>
            </ul>
        </div>

        <div className='py-5'>
          <h3 className='badge bg-primary fs-3'>Forecast</h3>
          <div className='card text-bg-info mb-3 bg-opacity-10' style={{width: '35rem'}}>
            <img src={icon} className='card-img-top mx-auto p-5' style={{height: '27rem'}} alt='weather'/>
          <div className='card-body'>
            <ul className="list-group list-group-horizontal">
            {selectedCity.forecast.map(item => (
              <li className='list-group-item border border-black rounded mx-3' key={item.date}>
                {item.date}: <br/>{item.temperature_min}°C - {item.temperature_max}°C, <br/>{item.description}
              </li>
            ))}
            </ul>
          </div>
        </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;