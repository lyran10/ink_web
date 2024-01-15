

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        "cards" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      },
      keyframes: {
        logo: {
          '0%': { transform: 'translateY(50px)',opacity : "0" },
          '50%,100%': { transform: 'translateX(0px),',opacity : "1"},
        },
        scan: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%,100%': { transform: 'translateX(400px)' },
        }
      },
      backgroundImage : {
        banner : "url(../src/images/studio1.jpg);",
        quote : "url(../src/images/quotes.jpg);",
        studio : "url(../src/images/studio.jpg);",
        ladyTattoo : "url(../src/images/ladyWithFlowers.jpg);",
      }
    },
  },
  plugins: [],
}

