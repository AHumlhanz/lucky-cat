type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-brand-primary text-white border-brand-primary hover:bg-sky-800 hover:border-sky-800',
  secondary: 'bg-transparent text-brand-primary border-brand-primary hover:bg-sky-50',
  ghost:     'bg-transparent text-brand-dark border-transparent hover:bg-slate-100',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1 rounded-md gap-1',
  md: 'text-base px-4 py-2 rounded-xl gap-2',
  lg: 'text-lg px-6 py-3 rounded-2xl gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center font-medium font-sans border-2 cursor-pointer transition-colors duration-150 whitespace-nowrap disabled:opacity-45 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
