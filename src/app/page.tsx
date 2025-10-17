import WeatherPanel from '@/components/WeatherPanel'
import Dashboard from '@/components/Dashboard'

export default function Home() {
  return (
    <main className="app-container">
      {/* Left Dashboard - 70% width */}
      <div className="dashboard-panel">
        <Dashboard />
      </div>
      
      {/* Right Weather Panel - 30% width */}
      <div className="weather-panel-wrapper">
        <WeatherPanel />
      </div>
    </main>
  )
}