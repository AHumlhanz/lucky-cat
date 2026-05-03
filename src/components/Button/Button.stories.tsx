import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Lucky Cat',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
}

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
}
