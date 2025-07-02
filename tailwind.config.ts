
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(220, 90%, 56%)',
					foreground: 'hsl(210 40% 98%)',
					dark: 'hsl(220, 90%, 46%)',
				},
				secondary: {
					DEFAULT: 'hsl(220, 14%, 96%)',
					foreground: 'hsl(220, 9%, 46%)'
				},
				accent: {
					DEFAULT: 'hsl(220, 14%, 96%)',
					foreground: 'hsl(220, 9%, 46%)'
				},
				muted: {
					DEFAULT: 'hsl(220, 14%, 96%)',
					foreground: 'hsl(220, 9%, 46%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84.2% 60.2%)',
					foreground: 'hsl(210 40% 98%)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				tech: {
					php: 'hsl(240, 76%, 62%)',
					javascript: 'hsl(45, 90%, 55%)',
					typescript: 'hsl(210, 76%, 56%)',
					laravel: 'hsl(0, 85%, 60%)',
					node: 'hsl(100, 60%, 40%)',
					mysql: 'hsl(30, 85%, 55%)',
					postgresql: 'hsl(210, 50%, 45%)',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				glow: {
					'from': { boxShadow: '0 0 20px hsl(220, 90%, 56%)' },
					'to': { boxShadow: '0 0 30px hsl(220, 90%, 66%), 0 0 40px hsl(220, 90%, 56%)' }
				}
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
