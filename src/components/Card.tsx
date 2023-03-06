type Props = {
  children: React.ReactNode
  bgColor?: string
  className?: string
}

export default function Card({
  children,
  bgColor = 'bg-neutral-100',
  className = '',
}: Props) {
  return (
    <div
      className={`${bgColor} rounded border-2 border-dashed border-black p-6 ${className}`}
    >
      {children}
    </div>
  )
}
