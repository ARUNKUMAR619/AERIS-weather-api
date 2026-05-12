import { useState } from "react";
import axios from "axios";
function Weather() {
  const [city, setcity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setdesc] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [localTime, setLocalTime] = useState("");

  function handleCity(evt) {
    setcity(evt.target.value);
  }

  function getWeather() {
    var weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61779e6a3208fe4b2a45a4ca76e8863b&units=metric`,
    );

    weatherData
      .then(function (Success) {
        setWeather(Success.data.weather[0].main);
        setTemp(Success.data.main.temp);
        setdesc(Success.data.weather[0].description);
        setHumidity(Success.data.main.humidity);
        setWind(Success.data.wind.speed);

        const utcMs = Date.now() + new Date().getTimezoneOffset() * 60000;

        setLocalTime(
          new Date(utcMs + Success.data.timezone * 1000).toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit",
            },
          ),
        );

      })
      .catch(function (Error) {
        console.error("City not found", Error);
        setWeather("City not found");
        setTemp("");
        setdesc("");
        setHumidity("");
        setWind("");
        setLocalTime("");
      });
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-6">

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] top-[-100px] left-[-100px] animate-pulse"></div>

      <div className="absolute w-[400px] h-[400px] bg-fuchsia-500/20 rounded-full blur-[150px] bottom-[-100px] right-[-100px] animate-pulse"></div>


      <div className="relative w-full max-w-6xl border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[40px] p-8 shadow-2xl">

        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div>
            <h1 className="text-6xl font-black tracking-tight">AERIS</h1>

            <p className="text-slate-400 mt-2 text-lg">
              I’ll help you read the sky before it speaks.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>

                <div className="absolute w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>

              <p className="text-slate-500 uppercase tracking-[5px] text-sm">
                Atmospheric Engine
              </p>
            </div>
          </div>
        </div>


        <div className="mt-10 flex flex-col md:flex-row gap-5">
          <div className="flex-1 relative">
            <input
              onChange={handleCity}
              type="text"
              placeholder="Enter a city..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl p-5 text-lg outline-none focus:border-cyan-400 transition-all duration-300 placeholder:text-slate-600"
            />

            <div className="absolute right-5 top-5 text-slate-500">⌖</div>
          </div>

          <button
            onClick={getWeather}
            className="bg-white text-black px-10 py-5 rounded-2xl font-bold tracking-wide hover:scale-105 hover:bg-cyan-300 transition-all duration-300 shadow-2xl"
          >
            SCAN SKY
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-10">

          <div className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[35px] p-8 relative overflow-hidden">
            <div className="absolute w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl top-[-40px] right-[-40px]"></div>

            <p className="uppercase tracking-[6px] text-slate-500 text-sm">
              Current Forecast
            </p>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-[110px] leading-none font-black">
                  {temp}°
                </h1>

                <p className="text-3xl text-cyan-300 font-semibold mt-4">
                  {weather}
                </p>

                <p className="text-slate-400 text-lg capitalize mt-2">{desc}</p>


                <div className="mt-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

                  <p className="text-slate-400 tracking-[3px] uppercase text-sm">
                    Local Time : {localTime}
                  </p>
                </div>
              </div>


              <div className="mt-10 md:mt-0">
                <div className="w-52 h-52 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-7xl backdrop-blur-2xl animate-pulse">
                  {weather === "Clouds"
                    ? "☁️"
                    : weather === "Rain"
                      ? "🌧️"
                      : weather === "Clear"
                        ? "☀️"
                        : weather === "Thunderstorm"
                          ? "⛈️"
                          : "🌍"}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-slate-500 uppercase tracking-[4px] text-sm">
                Humidity
              </p>

              <h1 className="text-6xl font-black mt-4">{humidity}%</h1>

              <div className="w-full bg-white/10 h-2 rounded-full mt-6 overflow-hidden">
                <div
                  style={{ width: `${humidity}%` }}
                  className="bg-cyan-400 h-full rounded-full"
                ></div>
              </div>
            </div>


            <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-slate-500 uppercase tracking-[4px] text-sm">
                Wind Velocity
              </p>

              <h1 className="text-6xl font-black mt-4">{wind}</h1>

              <p className="text-slate-400 mt-2">km/h atmospheric movement</p>
            </div>
          </div>
        </div>


        <div className="mt-8 border border-white/10 rounded-[30px] p-6 bg-white/5 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-slate-500 uppercase tracking-[5px] text-sm">
              Atmospheric Status
            </p>

            <h1 className="text-2xl font-bold mt-2">
              {weather
                ? `Sky conditions detected in ${city}`
                : "Awaiting city scan..."}
            </h1>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-slate-400 text-lg italic">
              “Every cloud carries a signal.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
