/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo': "var(--indigo)",
        'black': "var(--black)",
        'dark': "var(--dark)",
        'gray': "var(--gray)",
        'light-gray': "var(--lightGray)",
        'light-indigo': "var(--light-indigo)",
        'white-light': "var(--white-light)",
        'white-stone': "var(--white-stone)",
      },
    },
  },
  plugins: [],
}

