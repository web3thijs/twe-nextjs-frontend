module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'black': '#000000',
        'white': '#FFFFFF',
        'offwhite': '#f0f5f4',
        'grey': '#85899C',
        'grey-light': '#F1F1F1',
        'greenish': '#7EB6AD',
        'greenish-light': '#8BC9BF',
        'blueish': '#212949',
        'blueish-light': '#92D4C9',
        'temp-purple': '#7E57C2'
      },
      boxShadow: {
        '3xl': '0 1px 4px 0 rgb(20 20 43 / 1%), 0 3px 6px 0 rgb(51 71 255 / 1%), 0 4px 22px 0 rgb(21 19 91 / 4%)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
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
