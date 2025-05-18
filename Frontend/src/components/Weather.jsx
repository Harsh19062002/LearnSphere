import { useState, useRef, useEffect } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Weather() {
  const [city, setCity] = useState("Delhi");
  const [inputCity, setInputCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const weatherRef = useRef(null);

  const fetchWeather = async (searchCity = city) => {
    try {
      setError(null);
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found or API error.");
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      setCity(inputCity.trim());
      fetchWeather(inputCity.trim());
    }
  };

  useEffect(() => {
    fetchWeather();

    gsap.fromTo(
      weatherRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: weatherRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={weatherRef}
      className="bg-indigo-50 p-6 rounded-xl shadow-md max-w-md mx-auto text-center"
    >
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">
        Weather Checker
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Weather Info */}
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : weather ? (
        <>
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">
            {weather.name}, {weather.sys.country}
          </h3>
          <p className="text-indigo-700 text-lg">
            🌡 {weather.main.temp}°C | {weather.weather[0].description}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
