/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./custom-fonts.css",
  ],
  
  theme: {
    screens: {
      // Default breakpoints
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    'break1':'640px',
    'break2': '770px',
      
    },
    extend: {
      fontSize: {
        'Displaytext/Outlined': ['3rem', {
          lineHeight: '3.5rem',
          letterSpacing: '-0.06em',
        }],
        'Displaytext(M)/Outlined(M)': ['1.75rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.03em',
        }],
        'Displaytext(M)/Outlined(M)forsmallphone': ['1.5rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.03em',
        }],
        'Subheading': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '-0.05em',
        }],
        'HeadingH1': ['2.25rem', {
          lineHeight: '2.75rem',
          letterSpacing: '-0.72em',
        }],
        'HeadingH2': ['2rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.04em',
        }],
        'HeadingH3': ['1.75rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.035rem',
        }],
        'HeadingH4': ['1.5rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.03rem',
        }],
        'HeadingH5': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.025rem',
        }],
        'HeadingH6': ['1rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02rem',
        }],
        'ParagraphP1': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.025rem',
        }],
        'ParagraphP2': ['1rem', {
          lineHeight: '1.25rem',
          letterSpacing: '0.02rem',
        }],
        'ParagraphP3': ['.75rem', {
          lineHeight: '1rem',
          letterSpacing: '0.015rem',
        }],
        'ButtonText': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0.025rem',
        }],
        'ButtonText2': ['1rem', {
          lineHeight: '20px',
          letterSpacing: '0.02rem',
        }],
        'Underlined': ['1.25rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.025rem',
        }],
      },
      fontFamily:{
        'Sora':['Sora','sans-serif'],
        'sans': ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        'zinc100': '#f4f4f5',
        'zinc200': '#e4e4e7',
        'zinc300': '#d4d4d8',
        'zinc500': '#71717a',
        'zinc800': '#27272a',
        'Error500': '#ef4444',
      }
    },
  },
  plugins: [

  ],
}

