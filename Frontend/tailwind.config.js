/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"], // Enable dark mode (optional)
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}", // Specify paths for Tailwind to scan
	],
	theme: {
	  extend: {}, // No custom theme extensions required
	},
	plugins: [
	  require("tailwindcss-animate"), // Plugin for animations (optional)
	  require("daisyui"),             // DaisyUI plugin
	],
	daisyui: {
	  themes: [
		{
		  mytheme: {
			"primary": "#006cff",
          
"primary-content": "#000416",
          
"secondary": "#00ae00",
          
"secondary-content": "#000b00",
          
"accent": "#d5c600",
          
"accent-content": "#100e00",
          
"neutral": "#070707",
          
"neutral-content": "#c6c6c6",
          
"base-100": "#322e1c",
          
"base-200": "#2a2717",
          
"base-300": "#221f12",
          
"base-content": "#d2d1cd",
          
"info": "#008aaf",
          
"info-content": "#00070b",
          
"success": "#009666",
          
"success-content": "#000804",
          
"warning": "#d26c00",
          
"warning-content": "#100400",
          
"error": "#f5000f",
          
"error-content": "#150000",
		  },
		},
	  ],
	},
  };
  