import React, {useState} from "react";

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const convertToCelsius = (fahrenheit) => {
        return ((fahrenheit - 32) * 5)/9;
    }

    const convertToFahrenheit = (celsius) => {
        return (celsius * 9/5) + 32;
    }

    const handleCelsiusChange = (event) => {
        const value = event.target.value; // Define value here
        setCelsius(value);
        setFahrenheit(value === '' ? '' : convertToFahrenheit(value));
      };
      
      const handleFahrenheitChange = (event) => {
        const value = event.target.value; // Define value here
        setFahrenheit(value);
        setCelsius(value === '' ? '' : convertToCelsius(value));
      };
      

    return (
        <div className="temperature-converter">
            <label>
                Celsius:
                <input type="number" value={celsius} onChange={handleCelsiusChange} />
            </label>
            <br/>
            <label>
                Fahrenheit:
                <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
            </label>
        </div>
    )
}

export default TemperatureConverter;