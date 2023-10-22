import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00604E',
        secondary: '#73b964',
        headingColor: '#005140',
        lime_green: '#36D75E',
        light_green: '#E5EDE9',
        white: 'white',
        light_gray: '#d9d9d9',
        white_overlay: '#d9d9d9a3',
      },
      minHeight: {
        '80vh': '80vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
};


export default config;
