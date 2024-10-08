/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	fontFamily: {
		'unbounded': ["Unbounded", "system-ui"],
	   },
	   fontWeight: {
		hairline: 100,
		thin: 200,
		 light: 300,
		 normal: 400,
		 medium: 500,
		semibold: 600,
		 bold: 700,
		extrabold: 800,
		 black: 900,
	   }, 
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	  boxShadow: {
        'custom-red': '0px 0px 0px -3px rgb(254,255,254),7px 7px 0px -3px rgb(8, 28, 21),11px 11px 0px -3px rgb(216, 243, 220)',
		'custom-dark-green': '5px 5px 0px 0px rgb(8, 28, 21)',
        'custom-light-green': '5px 5px 0px 0px rgb(64, 145, 108)',
		'circle-glow': '0 0 20px rgba(64, 145, 108, 0.25)',
		'text-shadow-glow': '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3)',
	},
	textShadow: {
		'custom-glow': '0 0 60px rgba(216, 243, 220, 01)',
		'custom-green-glow': '0 100px #40916C', 
	  },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 60px rgba(216, 243, 220, 1)',
        },
        '.text-shadow-green-glow': {
          textShadow: '0 0 100px #40916C', // New shadow class
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

//rgb(254,255,254)