import React, { useState } from 'react';
import './App.css';

function App() {
  const [cityData, setCityData] = useState({
    population: 1000000,
    airQuality: 'Good',
    traffic: 'Moderate',
  });

  const updateCityData = () => {
    setCityData({
      population: cityData.population + 1000,
      airQuality: cityData.airQuality === 'Good' ? 'Bad' : 'Good',
      traffic: cityData.traffic === 'Moderate' ? 'Heavy' : 'Moderate',
    });
  };

  return (
    <div className="App">
      <h1>Urban Management Dashboard</h1>
      <div>
        <h2>City Data</h2>
        <p>Population: {cityData.population}</p>
        <p>Air Quality: {cityData.airQuality}</p>
        <p>Traffic: {cityData.traffic}</p>
      </div>
      <button onClick={updateCityData}>Update City Data</button>
    </div>
  );
}

export default App;
