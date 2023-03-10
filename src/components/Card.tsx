type Props = {
  children: React.ReactNode
  padding?: string
  bgColor?: string
  className?: string
}

export default function Card({
  children,
  padding = 'p-6',
  bgColor = 'bg-neutral-100',
  className = '',
}: Props) {
  return (
    <div
      className={`${bgColor} dashed-border flex flex-col gap-4 rounded ${padding} ${className}`}
    >
      {children}
    </div>
  )
}
