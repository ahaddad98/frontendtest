import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        cardbg: "#13171D"
      },
      backgroundImage: theme => ({
        'image1': "url('/4.png')",
      }),
      colors: {
        purple: '#AB23FF'
      },
      fontSize: {
        minsm: '10px',
        title: '68px',
        subtitle: '38px',
        paragraphs: '22px',
        paragsm: '18px'
      },
      fontFamily: {
        monument: ['Monument', 'sans-serif'],
      },
      borderColor: {
        grayborder: '#13171D'
      },
      divideColor:{
        graybord: '#13171D'
      }
    },
  },
  plugins: [],
};
export default config;
