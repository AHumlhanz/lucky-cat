import type { Preview } from '@storybook/react'
import '../src/tokens/tokens.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream', value: '#FDFAF4' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'red', value: '#E8392A' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
