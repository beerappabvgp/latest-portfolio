import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: '#d946ef' 
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], // Apply Poppins
        playfair: ['var(--font-playfair)', 'serif'], // Apply Playfair Display
        kode: ['var(--font-kode)', 'serif'],
        roboto: ['var(--font-roboto)' , 'sans-serif'],
        shan: ['var(--font-shan)' , 'sans-serif'],
        mclaren: ['var(--font-mclaren)' , 'sans-serif'],
        handlee: ['var(--font-handlee)' , 'serif'],
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
