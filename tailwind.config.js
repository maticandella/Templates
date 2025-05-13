/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                grotesk: ['Space Grotesk', 'sans-serif']
            },
        },
    },
    plugins: [],
}