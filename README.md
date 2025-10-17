# Weather App

This **Weather App** provides real-time forecasts with a modern, responsive design. Built for desktop and mobile (Soon), the app combines clean visuals with useful data, like temperature, forecasts, and conditions in an adaptive dashboard layout.

---

## Key Features

- **Dynamic Weather Dashboard** — Displays current location, temperature, highs/lows, and detailed weather descriptions.  
- **Hourly Forecast View** — Shows temperature changes for the next five hours using animated temperature bars.  
- **Adaptive Layouts** —  
  - **Desktop:** Full dashboard view with search, settings, and daily/weekly overview.  
  - **Mobile (Soon):** Compact real-time forecast window optimized for smaller screens.  
- **Gradient Weather Themes** — The background color adjusts based on conditions (e.g., sunny, cloudy, rainy).  
- **Location Search & Saved Cities** — Smooth expanding search box with scrollable results and star-based favorites.  
- **Professional Forecast Summaries** — Auto-generated summaries for both daily and weekly forecasts.  
- **Custom Settings** — Options for saved cities, temperature units, and theme preferences.  

---

## Tech Stack

- **Frontend:** Next.js, TypeScript, React, CSS 
- **API:** OpenWeather or similar weather data API  
- **Data Handling:** JSON (local storage for favorites)  
- **Design:** Linear gradients, smooth transitions, responsive grid/flexbox structure  

---

## Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

5. **For live weather data:** Add your OpenWeather API key to the environment variables (see `.env.local.example`)  

---

## Notes

- The desktop view includes a dual-panel layout (dashboard + forecast window).  
- Mobile users will automatically see the simplified forecast window only.  
- All icons and gradients are dynamically updated to match the current weather description.  