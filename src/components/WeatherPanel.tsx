'use client'

import { useState } from 'react'
import { format } from 'date-fns'

export default function WeatherPanel() {
  const [currentTime] = useState(new Date())
  
  // Mock data matching wireframes exactly
  const weatherData = {
    location: 'Atlanta',
    region: 'Georgia',
    time: format(currentTime, 'h:mm a'),
    temperature: 84,
    high: 88,
    low: 73,
    condition: 'Clear Skies',
    hourlyForecast: [
      { time: '3 PM', temp: 85 },
      { time: '4 PM', temp: 20 },
      { time: '5 PM', temp: 88 },
      { time: '6 PM', temp: 88 },
      { time: '7 PM', temp: 85 }
    ]
  }

  return (
    <div className="weather-panel-clear weather-panel">
      {/* Header */}
      <div className="weather-header">
        <div>
          <h1 className="location-text location-name">{weatherData.location}</h1>
          <p className="location-text location-region">{weatherData.region}</p>
        </div>
        <div className="time-display">{weatherData.time}</div>
      </div>

      {/* Weather Icon */}
      <div className="weather-icon-container">
        <div className="weather-icon-sun weather-icon">
          <svg className="sun-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-3.5-3.5 1.41-1.41L10 14.17l5.59-5.59L17 10l-7 7z"/>
          </svg>
        </div>
      </div>

      {/* Temperature */}
      <div className="temperature-section">
        <div className="temperature-display">{weatherData.temperature}°F</div>
        <div className="temperature-details">
          <div>H: {weatherData.high}°F</div>
          <div>L: {weatherData.low}°F</div>
          <div className="weather-condition">{weatherData.condition}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="weather-divider"></div>

      {/* Hourly Forecast */}
      <div className="hourly-forecast">
        <h3 className="forecast-title">Next 5 hrs</h3>
        <div className="forecast-bars">
          {weatherData.hourlyForecast.map((hour, index) => (
            <div key={index} className="forecast-item">
              <div className="forecast-time">{hour.time}</div>
              <div className="temp-bar">
                <div className="temp-bar-end"></div>
              </div>
              <div className="forecast-temp">{hour.temp}°F</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 