import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       
        primary: '#00604E', 
        secondary: '#36D75E',
        light_green: '#E5EDE9', 
       
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
