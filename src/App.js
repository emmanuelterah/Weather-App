import React from 'react';
// import './App.css';
import WeatherForm from './WeatherForm';

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await fetch('path/to/your/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Failed to submit data');
    }

    // Assuming successful submission, you can reset the form
    resetForm();
    // Additional logic after successful submission
    console.log('Data submitted successfully:', values);
  } catch (error) {
    console.error('Error submitting data:', error);
  } finally {
    // Ensure that the form is no longer in the submitting state
    setSubmitting(false);
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <div className="App-content">
        <WeatherForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
