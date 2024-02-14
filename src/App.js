import React, { useState, useEffect } from 'react';
import WeatherCard from './component/weathercard';

const App = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/cities')
      .then(response => response.json())
      .then(data => {
        setCities(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCityChange = (event) => {
    const selectedCityIndex = event.target.value;
    setSelectedCity(cities[selectedCityIndex]);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      {loading && <div>Loading...</div>}
      {error && <div>Error fetching data: {error.message}</div>}

      {!loading && !error && (
        <WeatherCard
          cities={cities}
          selectedCity={selectedCity}
          onCityChange={handleCityChange}
        />
      )}
    </div>
  );
};

export default App;
