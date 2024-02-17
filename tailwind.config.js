/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // enable dark mode
	theme: {
		extend: {
			fontFamily: {
				'maven-pro': ['Maven Pro', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
		screens: {
			'xs': '350px',
			// => @media (min-width: 350px) { ... }
			'sm': '568px',
			// => @media (min-width: 568px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1920px',
			// => @media (min-width: 1920px) { ... }
		}
	},
	plugins: [],
});
