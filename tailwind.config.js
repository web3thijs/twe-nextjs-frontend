module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      'offwhite': '#F9F9F9',
      'gray': '#85899C',
      'gray-light': '#F1F1F1',
      'greenish': '#7EB6AD',
      'greenish-light': '#DFF6F2',
      'blueish': '#212949',
      'blueish-light': '#EEF1FF',
      'temp-purple': '#7E57C2'
    },
    screens: {
      'xs': '370px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    boxShadow: {
      '3xl': '0 1.25rem 1.6875rem 0 rgba(0, 0, 0, 0.05)',
    }
  },
  plugins: [],
}
