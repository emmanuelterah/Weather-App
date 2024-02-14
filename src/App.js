import React, { useState, useEffect } from 'react';
import TemperatureConverter from './Component/TemperatureConverter';
import FavoriteButton from './Component/FavoriteButton';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  // Assuming you have some logic to fetch and set the selected city

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      {/* Render the TemperatureConverter component */}
      <TemperatureConverter />
      {/* Render the FavoriteButton component */}
      <FavoriteButton />
    </div>
  );
};

export default App;