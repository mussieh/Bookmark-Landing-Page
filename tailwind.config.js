/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            xl: { max: "1440px" },
            lg: { max: "1024px" },
            md: { max: "700px" },
            sm: { max: "425px" },
            xs: { max: "375px" },
        },
        extend: {
            colors: {
                softBlue: "hsl(231, 69%, 60%)",
                softRed: "hsl(0, 94%, 66%)",
                grayishBlue: "hsl(229, 8%, 60%)",
                veryDarkBlue: "hsl(229, 31%, 21%)",
            },
            fontFamily: {
                sans: ["Rubik", "sans-serif"],
            },
            backgroundImage: () => ({
                dots: "url('../images/bg-dots.svg')",
            }),
        },
    },

    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "10px" },
            });
        }),
    ],
};
