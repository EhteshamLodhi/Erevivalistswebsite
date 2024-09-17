/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#858585",
          "200": "#181818",
          "300": "#171717",
          "400": "#151515",
        },
        dodgerblue: {
          "100": "#3d94fe",
          "200": "#3c94fe",
        },
        aliceblue: "#eaf3fe",
        midnightblue: {
          "100": "#081d86",
          "200": "#05134d",
          "300": "rgba(8, 29, 134, 0.7)",
        },
        cornflowerblue: {
          "100": "#56a1fe",
          "200": "#3176cb",
        },
        lavender: "#e0e5f5",
        lightskyblue: "#a5cefe",
        gainsboro: "#d9d9d9",
        dimgray: {
          "100": "#717171",
          "200": "#707070",
        },
        darkslateblue: "#255799",
        white: "#fff",
        lightsteelblue: "#b3c1ed",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "13xl": "32px",
        "base-9": "15.9px",
        "10xl-2": "29.2px",
        "26xl-3": "45.3px",
        lgi: "19px",
        "6xl": "25px",
        xl: "20px",
        mid: "17px",
        "21xl": "40px",
        "4xl": "23px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "16xl": "35px",
      "181xl": "200px",
      "11xl": "30px",
      "61xl": "80px",
      xl: "20px",
      "31xl": "50px",
      "13xl-3": "32.3px",
      "201xl": "220px",
      "14xl": "33px",
      "91xl": "110px",
      "17xl": "36px",
      "18xl": "37px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
