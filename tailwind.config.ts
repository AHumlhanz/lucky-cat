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
      },
    },
  },
  plugins: [],
}

export default config
