import Link, { LinkProps } from 'next/link'

const variants = {
  default:
    'bg-brand-600 hover:bg-brand-800 active:bg-brand-900 shadow-[8px_9px_rgba(0,0,0,1)] text-white transition-colors',
  outline: 'border-2 border-black text-inherit',
}

type BaseProps = {
  className?: string
  variant?: keyof typeof variants
  children: React.ReactNode
}

type ButtonProps = BaseProps &
  React.ComponentPropsWithoutRef<'button'> &
  React.ComponentPropsWithoutRef<'a'>

type ButtonLinkProps = BaseProps & LinkProps

function cls(variant: keyof typeof variants, className = '') {
  return `inline-flex items-center rounded py-6 px-10 text-2xl font-medium leading-tight focus-visible:outline-none focus-visible:bg-brand-800 ${variants[variant]} ${className}`
}

export function Button({
  className = '',
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  const El = props.href ? 'a' : 'button'

  return (
    <El className={cls(variant, className)} {...props}>
      {children}
    </El>
  )
}

export function ButtonAsLink({
  className = '',
  children,
  variant = 'default',
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cls(variant, className)} {...props}>
      {children}
    </Link>
  )
}
