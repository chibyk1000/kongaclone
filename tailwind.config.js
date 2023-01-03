/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        slide: "68% 14% 14%",
        card: "25% 60%",
        header: "70% 20%",
        footer1: "13% 25% 18.5% 23% 23%",
        btn: "13% 80%",
        profile: "20% 60%",
        small: "repeat(6, 50%)",
        cart: "74% 25%",
      },
      gridTemplateRows: {
        card: "90%",
        product: "60% 40%",
      },
      background: {
        "   deal_pattern":
          "#94004f url('https://res.cloudinary.com/staging-konga-com/image/upload/f_auto,q_auto/v1654791685/assets/images/homepage/Bg-Icons.png')",
      },
      boxShadow: {
        myshadow: "0 0 2px #ccc",
        myshadowhover: "0 0 8px gray",
      },
    },
  },
  plugins: [],
};
