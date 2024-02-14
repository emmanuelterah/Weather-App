import React, { useState, useEffect } from 'react';
import WeatherCard from './Components/weathercard';
import BackgroundDisplay from './Components/BackgroundDisplay';

const App = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/cities')
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
    <div className="app bg-image h-screen w-full fixed left-0 top-0 -z-[10]">
    <BackgroundDisplay selectedcity={selectedCity} />
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