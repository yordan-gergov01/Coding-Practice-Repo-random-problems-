import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const apiKey = "209271eff7907bc4ee6b29ba2241c146";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const requestUrl = `${BASE_URL}?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  async function handleGetWeather() {
    if (city.trim() === "") return;

    try {
      const response = await fetch(requestUrl);
      const data = await response.json();
      setData(data);
      console.log(data); // afterwards to delete
      setCity("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Weather Foarcast</h1>
      <input
        type="text"
        placeholder="Search by city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => handleGetWeather()}>Get Weather</button>
      {data && (
        <>
          <h2>Weather in {data.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
          <p>Current weather: {data.weather[0].description}</p>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Humidity: {data.main.humidity} %</p>
        </>
      )}
    </div>
  );
}

export default App;
