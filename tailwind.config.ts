import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      colors: {
        brand: {
          primary:   colors.sky[700],      // #0369a1 — main blue
          dark:      '#222e40',            // navy (custom)
          accent:    colors.pink[500],     // #ec4899 — hot pink
          highlight: colors.yellow[500],   // #eab308 — yellow
          neutral:   colors.slate[600],    // #475569 — slate
          light:     colors.sky[50],       // #f0f9ff — light blue tint background
        },
        danger: {
          'extra-light': colors.red[50],
          light:         colors.red[200],
          base:          colors.red[500],
          dark:          colors.red[700],
          'extra-dark':  colors.red[900],
        },
        warning: {
          'extra-light': colors.yellow[50],
          light:         colors.yellow[200],
          base:          colors.yellow[500],
          dark:          colors.yellow[700],
          'extra-dark':  colors.yellow[900],
        },
        success: {
          'extra-light': colors.green[50],
          light:         colors.green[200],
          base:          colors.green[500],
          dark:          colors.green[700],
          'extra-dark':  colors.green[900],
        },
        info: {
          'extra-light': colors.sky[50],
          light:         colors.sky[200],
          base:          colors.sky[500],
          dark:          colors.sky[700],
          'extra-dark':  colors.sky[900],
        },
        surface: {
          'extra-light': colors.gray[50],
          light:         colors.gray[100],
          base:          colors.gray[200],
          dark:          colors.gray[500],
          'extra-dark':  colors.gray[700],
        },
      },
    },
  },
  plugins: [],
}

export default config
