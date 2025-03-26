/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    theme: {
        extend: {
            fontFamily: {
                lobster: ['Lobster', 'cursive'],
                grotesk: ['Space Grotesk', 'sans-serif']
            },
        },
    },
    plugins: [],
}