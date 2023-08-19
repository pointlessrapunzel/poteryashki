import Link, { LinkProps } from 'next/link'

const baseClasses =
  'h-[4.875rem] flex items-center justify-center rounded px-10 font-medium leading-none focus-visible:outline-none'

const variants = {
  default:
    'bg-brand-600 text-white shadow-[8px_9px_rgba(0,0,0,1)] hover:bg-brand-700 focus-visible:bg-brand-800 active:bg-brand-900 hover:translate-x-[8px] hover:translate-y-[9px] hover:shadow-[0px_0px_rgba(0,0,0,1)] transition-all',
  outline:
    'border-2 border-black text-inherit hover:bg-[rgba(0,0,0,0.025)] focus-visible:bg-[rgba(0,0,0,0.025)]',
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
  return [baseClasses, fontSize, variants[variant], className].join(' ')
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
