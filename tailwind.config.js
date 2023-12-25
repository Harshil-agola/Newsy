/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        emptyImg: 'url(src/assets/emptyImg.png)',
        tagName: 'url(src/assets/Tg.jpg)',
        NamePlate: 'url(src/assets/Name Plate.png)',
        BannerImage: 'url(src/assets/BgImage.jpg)',
        NewsPart: "url(src/assets/images.jpeg)"
      },

      fontFamily: {
        headding: "Dosis, sans-serif",
        textFont: 'Noto Sans, sans-serif'
      }
    },
  },
  plugins: [],
}

