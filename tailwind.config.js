module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tighter: "-0.15em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
  },
  plugins: [],
}
