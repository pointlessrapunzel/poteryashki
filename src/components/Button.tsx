import Link, { LinkProps } from 'next/link'

const variants = {
  default:
    'bg-brand-600 hover:bg-brand-800 active:bg-brand-900 shadow-[8px_9px_rgba(0,0,0,1)] text-white transition-colors',
  outline: 'border-2 border-black text-inherit',
}

type BaseProps = {
  className?: string
  fontSize?: string
  variant?: keyof typeof variants
  children: React.ReactNode
}

type ButtonProps = BaseProps &
  React.ComponentPropsWithoutRef<'button'> &
  React.ComponentPropsWithoutRef<'a'>

type ButtonLinkProps = BaseProps & LinkProps

function cls(
  variant: keyof typeof variants,
  fontSize = 'text-4xl',
  className = ''
) {
  return `flex w-max items-center rounded py-4 px-10 font-medium leading-tight focus-visible:bg-brand-800 focus-visible:outline-none ${fontSize} ${variants[variant]} ${className}`
}

export function Button({
  className = '',
  fontSize,
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  const El = props.href ? 'a' : 'button'

  return (
    <El className={cls(variant, fontSize, className)} {...props}>
      {children}
    </El>
  )
}

export function ButtonAsLink({
  className = '',
  fontSize,
  children,
  variant = 'default',
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cls(variant, fontSize, className)} {...props}>
      {children}
    </Link>
  )
}
