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

    for (let node of Array.from(scrollRoot.current.children)) {
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
            data-carousel-idx={idx}
            className='relative flex w-full flex-none snap-center snap-always'
          >
            {ch}
          </div>
        ))}
      </div>
      <button
        className='absolute left-0 top-1/2 -translate-y-1/2 rotate-180 disabled:opacity-70'
        disabled={current == 0}
        onClick={() => {
          scrollRoot.current?.scrollBy({
            left: -scrollRoot.current.clientWidth,
          })
        }}
      >
        <Image
          width={52}
          height={52}
          src={iconCarouselArrow}
          alt='Предыдущее фото'
        />
      </button>
      <button
        className='absolute right-0 top-1/2 -translate-y-1/2 disabled:opacity-70'
        disabled={current == children.length - 1}
        onClick={() => {
          scrollRoot.current?.scrollBy({
            left: scrollRoot.current.clientWidth,
          })
        }}
      >
        <Image
          width={52}
          height={52}
          src={iconCarouselArrow}
          alt='Следующее фото'
        />
      </button>
      <div className='mt-5 flex justify-center gap-5'>
        {React.Children.map(children, (_, idx) => (
          <CarouselIndicatorButton
            current={current == idx}
            scrollElement={scrollRoot.current?.children[idx] as HTMLDivElement}
          />
        ))}
      </div>
    </div>
  )
}

type CarouselIndicatorButtonProps = {
  current?: Boolean
  scrollElement?: HTMLDivElement
}

function CarouselIndicatorButton({
  current = false,
  scrollElement,
}: CarouselIndicatorButtonProps) {
  return (
    <button
      onClick={() => {
        if (!scrollElement) return
        scrollElement.scrollIntoView({ block: 'nearest' })
      }}
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
