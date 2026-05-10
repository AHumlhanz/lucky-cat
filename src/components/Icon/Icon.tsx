import React from 'react'

export interface IconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  variant?: 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  color?: string
  'aria-label'?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  lg: 'w-8 h-8',
}

export function Icon({
  icon: IconComponent,
  variant = 'outline',
  size = 'md',
  color = 'text-current',
  'aria-label': ariaLabel,
  className = '',
}: IconProps) {
  const mdSize = variant === 'solid' ? 'w-5 h-5' : 'w-6 h-6'
  const sizeClass = size === 'md' ? mdSize : sizeClasses[size]

  return (
    <IconComponent
      className={`${sizeClass} ${color} ${className}`.trim()}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? 'img' : undefined}
    />
  )
}
