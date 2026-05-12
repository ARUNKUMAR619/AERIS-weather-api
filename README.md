# AERIS ☁️

A futuristic weather application built using React, Tailwind CSS, Axios, and the OpenWeather API.

AERYX provides real-time weather updates with a cinematic atmospheric interface inspired by futuristic AI systems and sci-fi dashboards.

---

## Features

- Real-time weather search
- Dynamic local city time
- Temperature, humidity, and wind data
- Responsive futuristic UI
- Glassmorphism design
- Animated atmospheric effects
- Error handling for invalid cities
- Quick city search pills
- Dynamic weather condition icons

---

## Technologies Used

- React.js
- Tailwind CSS
- Axios
- OpenWeather API

---

## API Used

### OpenWeather API

Used to fetch:
- Weather conditions
- Temperature
- Humidity
- Wind speed
- Timezone offset

API Endpoint:

```bash
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY&units=metric
```

---

## Techniques Used

### React Hooks

Used `useState()` for:
- City input
- Weather data
- Temperature
- Description
- Humidity
- Wind speed
- Local city time
- Error handling

---

### API Fetching with Axios

```js
axios(url)
  .then(function (Success) {

  })

  .catch(function (err) {

  })
```

Used:
- Promise handling
- API response handling
- Error handling

---

### Dynamic Local Time Calculation

Generated local time dynamically using:
- OpenWeather timezone offset
- UTC conversion
- JavaScript Date methods

```js
const utcMs =
  Date.now() + new Date().getTimezoneOffset() * 60000;

setLocalTime(
  new Date(
    utcMs + Success.data.timezone * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })
);
```

---

### Conditional Rendering

Used conditional rendering for:
- Error messages
- Empty states
- Dynamic weather icons

---

### Tailwind CSS Styling

Used:
- Flexbox
- Grid layouts
- Backdrop blur
- Glassmorphism
- Gradients
- Hover animations
- Responsive design
- Transition effects
- Typography customization

---

## UI Design Inspiration

Inspired by:
- Futuristic AI systems
- Atmospheric dashboards
- Sci-fi operating systems
- Cyberpunk interface aesthetics

---

## Future Improvements

- 5-day forecast
- Sunrise and sunset data
- Weather-based animated backgrounds
- Geolocation support
- Search history
- Live weather transitions

---

## Author

Arun Kumar K