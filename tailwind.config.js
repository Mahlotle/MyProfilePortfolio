/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        gridTemplateColumns: {
          auto: 'repeat(auto-fit, minmax(200px, 1fr))',
        },
        fontFamily: {
          sans: ['Outfit', 'Poppins', 'sans-serif'], // Added Outfit as the primary sans-serif font
          serif: ['Ovo', 'serif'], // Keep Ovo for any serif needs
        },
        animation: {
          spin_slow: 'spin 6s linear infinite',
        },
        colors: {
          lightHover: '#fcf4ff',
          darkHover: '#2a004a',
          darkTheme: '#11001F',
          primary: '#5B21B6', // Example of a professional primary color
          secondary: '#6EE7B7', // Example of a complementary secondary color
        },
        boxShadow: {
          black: '4px 4px 0 #000',
          white: '4px 4px 0 #fff',
        },
      },
    },
    darkMode: 'class', // Updated for consistency; can also use 'media' if preferred
    plugins: [],
  }
  