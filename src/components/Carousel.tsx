import iconCarouselArrow from '@/../public/icons/icon-carousel-arrow.svg'
import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode[]
}

export default function ImageCarousel({ children }: Props) {
  const [current, setCurrent] = React.useState(0)

  const scrollRoot = React.useRef<HTMLDivElement>(null)
  const io = React.useRef<IntersectionObserver | null>(null)
  const nodes = React.useRef(new Array())

  let ioCallback = (nodes: IntersectionObserverEntry[]) => {
    nodes.forEach((n) => {
      const target = n.target as HTMLElement
      if (n.isIntersecting) setCurrent(+target.dataset.carouselIdx!)
    })
  }

  React.useEffect(() => {
    if (!scrollRoot.current) return

    io.current = new IntersectionObserver(ioCallback, {
      root: scrollRoot.current,
      threshold: 0.5,
    })

    for (let node of nodes.current) {
      io.current.observe(node)
    }

    return () => io.current?.disconnect()
  }, [children])

  return (
    <div className='relative'>
      <div
        ref={scrollRoot}
        className='hide-scrollbar relative flex snap-x snap-mandatory  overflow-x-scroll overscroll-x-contain scroll-smooth'
      >
        {React.Children.map(children, (ch, idx) => (
          <div
            ref={(el) => (nodes.current[idx] = el)}
            data-carousel-idx={idx}
            className='relative flex w-full flex-none snap-start snap-always'
          >
            {ch}
          </div>
        ))}
      </div>
      <button
        className='absolute left-0 top-1/2 -translate-y-1/2 rotate-180 disabled:opacity-70'
        disabled={current == 0}
        onClick={() => {
          nodes.current[current - 1].scrollIntoView({ block: 'center' })
        }}
      >
        <Image width={52} height={52} src={iconCarouselArrow} alt='Назад' />
      </button>
      <button
        className='absolute right-0 top-1/2 -translate-y-1/2 disabled:opacity-70'
        disabled={current == children.length - 1}
        onClick={() => {
          nodes.current[current + 1].scrollIntoView({ block: 'center' })
        }}
      >
        <Image width={52} height={52} src={iconCarouselArrow} alt='Назад' />
      </button>
      <div className='mt-5 flex justify-center gap-5'>
        {React.Children.map(children, (ch, idx) => (
          <CarouselIndicatorButton
            current={current == idx}
            scrollRef={nodes.current[idx]}
          />
        ))}
      </div>
    </div>
  )
}

type CarouselIndicatorButtonProps = {
  current?: Boolean
  scrollRef: HTMLElement
}

function CarouselIndicatorButton({
  current = false,
  scrollRef,
}: CarouselIndicatorButtonProps) {
  return (
    <button
      onClick={() =>
        scrollRef.scrollIntoView({
          block: 'center',
        })
      }
    >
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='6.5'
          cy='6.5'
          r='6'
          fill={current ? 'black' : 'white'}
          stroke='black'
        />
      </svg>
    </button>
  )
}
