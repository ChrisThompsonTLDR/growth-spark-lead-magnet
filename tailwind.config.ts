
import type { Config } from "tailwindcss";

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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New earthy color palette
				sage: {
					50: '#f4f7f4',
					100: '#e6ede6',
					200: '#d0ddd1',
					300: '#afc5b1',
					400: '#86a689',
					500: '#638a67',  // Medium sage green
					600: '#4d704f',  // Sage green
					700: '#3e583f',  // Dark sage
					800: '#344635',
					900: '#2b392c',
					950: '#141f15',
				},
				terra: {
					50: '#faf5f0',
					100: '#f5e8db',
					200: '#ebcfb6',
					300: '#e0b18c',
					400: '#d79366',  // Medium terracotta
					500: '#c67945',  // Terracotta
					600: '#b56437',  // Dark terracotta
					700: '#964f30',
					800: '#7b422d',
					900: '#663a2a',
					950: '#371c14',
				},
				sand: {
					50: '#f9f8f5',
					100: '#f2efe8',
					200: '#e6e0d1',
					300: '#d5c9af',
					400: '#c3b08a',  // Light sand
					500: '#b39c6f',  // Sand
					600: '#a68c5e',  // Dark sand
					700: '#8a724d',
					800: '#715f44',
					900: '#5d4f3b',
					950: '#332b20',
				},
				gray: {
					50: '#f7f7f7',  
					100: '#efefef',
					200: '#dfdfdf',
					300: '#cacaca',
					400: '#aaadb0',  // Cool gray
					500: '#8E9196',  // Neutral gray
					600: '#666666',
					700: '#4d4d4d',
					800: '#333333',  // Dark gray
					900: '#1a1a1a',
					950: '#0d0d0d',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'pulse-light': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'pulse-light': 'pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Poppins', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
