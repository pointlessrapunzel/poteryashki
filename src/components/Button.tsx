const variants = {
  default: 'bg-brand-600 shadow-[8px_9px_rgba(0,0,0,1)] text-white',
  outline: 'border-2 border-black text-inherit',
}

type Props = {
  className?: string
  variant?: keyof typeof variants
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'> &
  React.ComponentPropsWithoutRef<'a'>

export default function Button({
  className,
  children,
  variant = 'default',
  ...props
}: Props) {
  const El = props.href ? 'a' : 'button'
  return (
    <El
      className={`flex h-full items-center rounded py-6 px-10 text-2xl font-medium leading-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </El>
  )
}
