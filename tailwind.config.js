/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [ './public/**/*.{html,js}' ],
	theme: {
		extend: {
			colors: {
				bege: '#e5e5e5',
				azul: '#4263EB',
				preto: '#00082F'
			},
			fontFamily: {
				play: "'Play', sans-serif"
			},
			opacity: {
				'67': '.67'
			}
		}
	},
	plugins: []
};
