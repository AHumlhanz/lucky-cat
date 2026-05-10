import type { Meta, StoryObj } from '@storybook/react'
import {
  HomeIcon as HomeOutline,
  BellIcon as BellOutline,
  StarIcon as StarOutline,
  HeartIcon as HeartOutline,
  UserIcon as UserOutline,
  Cog6ToothIcon as CogOutline,
  MagnifyingGlassIcon as SearchOutline,
  XMarkIcon as CloseOutline,
  CheckIcon as CheckOutline,
  ExclamationTriangleIcon as WarnOutline,
  InformationCircleIcon as InfoOutline,
  CheckCircleIcon as SuccessOutline,
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeSolid,
  BellIcon as BellSolid,
  StarIcon as StarSolid,
  HeartIcon as HeartSolid,
  UserIcon as UserSolid,
  Cog6ToothIcon as CogSolid,
  ExclamationTriangleIcon as WarnSolid,
  InformationCircleIcon as InfoSolid,
  CheckCircleIcon as SuccessSolid,
} from '@heroicons/react/20/solid'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['Home', 'Bell', 'Star', 'Heart', 'User', 'Settings'],
      mapping: {
        Home: HomeOutline,
        Bell: BellOutline,
        Star: StarOutline,
        Heart: HeartOutline,
        User: UserOutline,
        Settings: CogOutline,
      },
    },
    variant: {
      control: 'radio',
      options: ['outline', 'solid'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: [
        'text-current',
        'text-brand-primary',
        'text-brand-dark',
        'text-brand-accent',
        'text-brand-highlight',
        'text-brand-neutral',
        'text-danger-base',
        'text-warning-base',
        'text-success-base',
        'text-info-base',
        'text-surface-dark',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    icon: HomeOutline,
    variant: 'outline',
    size: 'md',
    color: 'text-brand-primary',
  },
}

export const OutlineVariant: Story = {
  name: 'Outline — 24×24',
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {[HomeOutline, BellOutline, StarOutline, HeartOutline, UserOutline, CogOutline, SearchOutline, CloseOutline].map(
        (IconComp, i) => (
          <Icon key={i} icon={IconComp} variant="outline" color="text-brand-dark" />
        )
      )}
    </div>
  ),
}

export const SolidVariant: Story = {
  name: 'Solid — 20×20',
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      {[HomeSolid, BellSolid, StarSolid, HeartSolid, UserSolid, CogSolid].map((IconComp, i) => (
        <Icon key={i} icon={IconComp} variant="solid" color="text-brand-dark" />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <div className="flex flex-col items-center gap-1">
        <Icon icon={StarOutline} size="sm" color="text-brand-primary" />
        <span className="text-xs text-surface-dark font-sans">sm — 16px</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Icon icon={StarOutline} size="md" color="text-brand-primary" />
        <span className="text-xs text-surface-dark font-sans">md — 24px</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Icon icon={StarOutline} size="lg" color="text-brand-primary" />
        <span className="text-xs text-surface-dark font-sans">lg — 32px</span>
      </div>
    </div>
  ),
}

export const ColorTokens: Story = {
  name: 'Color Tokens',
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      {[
        { color: 'text-brand-primary', label: 'brand-primary' },
        { color: 'text-brand-accent', label: 'brand-accent' },
        { color: 'text-brand-highlight', label: 'brand-highlight' },
        { color: 'text-danger-base', label: 'danger-base' },
        { color: 'text-warning-base', label: 'warning-base' },
        { color: 'text-success-base', label: 'success-base' },
        { color: 'text-info-base', label: 'info-base' },
        { color: 'text-surface-dark', label: 'surface-dark' },
      ].map(({ color, label }) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <Icon icon={BellOutline} size="md" color={color} />
          <span className="text-xs text-surface-dark font-sans">{label}</span>
        </div>
      ))}
    </div>
  ),
}

export const SemanticIcons: Story = {
  name: 'Semantic Status Icons',
  render: () => (
    <div className="flex gap-6 p-4">
      <Icon icon={WarnOutline} variant="outline" color="text-warning-base" aria-label="Warning" />
      <Icon icon={InfoOutline} variant="outline" color="text-info-base" aria-label="Information" />
      <Icon icon={SuccessOutline} variant="outline" color="text-success-base" aria-label="Success" />
      <Icon icon={WarnSolid} variant="solid" color="text-warning-base" aria-label="Warning" />
      <Icon icon={InfoSolid} variant="solid" color="text-info-base" aria-label="Information" />
      <Icon icon={SuccessSolid} variant="solid" color="text-success-base" aria-label="Success" />
    </div>
  ),
}

export const InheritedColor: Story = {
  name: 'Inherits Parent Color',
  render: () => (
    <div className="flex gap-6 p-4">
      <button className="flex items-center gap-1 text-brand-primary font-sans text-sm">
        <Icon icon={CheckOutline} size="sm" />
        Confirm
      </button>
      <button className="flex items-center gap-1 text-danger-base font-sans text-sm">
        <Icon icon={CloseOutline} size="sm" />
        Delete
      </button>
    </div>
  ),
}
