import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2744',
          dark: '#111b33',
          light: '#253460',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#e6c96b',
          dark: '#a88530',
        },
      },
    },
  },
  plugins: [],
}

export default config
