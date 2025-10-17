'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Search, Settings } from 'lucide-react'

export default function Dashboard() {
  const [currentTime] = useState(new Date())
  
  const greeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  const todayData = {
    sunrise: '7:04 AM',
    sunset: '8:13 PM',
    feelsLike: 89,
    precipitation: 10,
    windSpeed: 7,
    humidity: 84,
    airQuality: '22G'
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <Settings className="settings-icon" />
          <div>
            <h1 className="greeting-text">{greeting()}</h1>
            <p className="date-text">{format(currentTime, 'EEE, MMMM do')}</p>
          </div>
        </div>
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search location here" 
            className="search-input"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="dashboard-divider"></div>

      {/* Navigation */}
      <div className="dashboard-navigation">
        <button className="nav-button active">Today's overview</button>
        <button className="nav-button">Description</button>
      </div>

      {/* Today's Cards */}
      <div className="cards-container">
        <div className="cards-grid">
          {/* Sunrise/Sunset */}
          <div className="dashboard-card">
            <div className="card-label">Sunrise</div>
            <div className="card-value">{todayData.sunrise}</div>
            <div className="card-label">Sunset</div>
            <div className="card-value">{todayData.sunset}</div>
          </div>
          
          {/* Sunrise/Sunset */}
          <div className="dashboard-card">
            <div className="card-label">Sunrise</div>
            <div className="card-value">{todayData.sunrise}</div>
            <div className="card-label">Sunset</div>
            <div className="card-value">{todayData.sunset}</div>
          </div>

          {/* Sunrise/Sunset */}
          <div className="dashboard-card">
            <div className="card-label">Sunrise</div>
            <div className="card-value">{todayData.sunrise}</div>
            <div className="card-label">Sunset</div>
            <div className="card-value">{todayData.sunset}</div>
          </div>

          {/* Sunrise/Sunset */}
          <div className="dashboard-card">
            <div className="card-label">Sunrise</div>
            <div className="card-value">{todayData.sunrise}</div>
            <div className="card-label">Sunset</div>
            <div className="card-value">{todayData.sunset}</div>
          </div>

          {/* Feels Like */}
          <div className="dashboard-card">
            <div className="card-label">Feels like</div>
            <div className="card-value">{todayData.feelsLike}°F</div>
          </div>

          {/* Precipitation */}
          <div className="dashboard-card">
            <div className="card-label">Perception</div>
            <div className="card-value">{todayData.precipitation}%</div>
          </div>

          {/* Wind Speed */}
          <div className="dashboard-card">
            <div className="card-label">Wind speed</div>
            <div className="card-value">{todayData.windSpeed} mph</div>
          </div>

          {/* Humidity */}
          <div className="dashboard-card">
            <div className="card-label">Humidity</div>
            <div className="card-value">{todayData.humidity}%</div>
          </div>

          {/* Air Quality */}
          <div className="dashboard-card">
            <div className="card-label">Air quality</div>
            <div className="card-value">{todayData.airQuality}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

