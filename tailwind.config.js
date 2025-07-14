/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-orange": "#FF5823",
        "cornsilk": "#fff8dc",
        "darkblue": "#0c1220",
        "darkvalue": "#1a2238",
        "whitesmoke": "#f5f5f5",
      },
      fontFamily: {
        fantasy: ['Fantasy', 'fantasy'],
      }
    },
  },
  plugins: [],
};

