/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: "#00933F",
        greenLight: "#26BC80",
        greenDark: "#239768",
        greenBackLayer: "#26BC802A",
  
        yellow: "#DDA824",
        yellowLight: "#FFBA49",
  
        grey: "#949494",
        greyLight: "#B3B3B3",

        screenBackground: "#F1FDF8EE"
      },
      fontFamily: {
        RalewayRegular: ['Raleway-Regular'],
        RalewayMedium: ['Raleway-Medium'],
        RalewaySemiBold: ['Raleway-SemiBold'],
        RalewayBold: ['Raleway-Bold'],
      }
    }
  },
  plugins: [],
}

