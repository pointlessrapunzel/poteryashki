type Props = {
  children: React.ReactNode
  padding?: string
  bgColor?: string
  className?: string
}

export default function Card({
  children,
  padding = 'p-4 lg:p-6',
  bgColor = 'bg-neutral-100',
  className = '',
}: Props) {
  return (
    <div
      className={`${bgColor} dashed-border flex flex-col items-center gap-3 rounded sm:gap-5 ${padding} ${className}`}
    >
      {children}
    </div>
  )
}
