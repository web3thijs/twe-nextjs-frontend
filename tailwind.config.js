module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#FFFFFF',
      'gray': '#85899C',
      'gray-light': '#C5C5C5',
      'greenish': '#7EB6AD',
      'greenish-light': '#DFF6F2',
      'blueish': '#212949',
      'blueish-light': '#EEF1FF'
    },
    screens: {
      'xs': '370px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
