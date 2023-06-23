import cx from 'clsx'
import Image from 'next/image'
import Cube from '@/components/Cube'

export default function Home() {
  const mainCx = cx('Main w-screen h-screen flex place-content-center place-items-center')
  const titleCx = cx('Title absolute top-6 left-6 text-6xl font-bold text-center')
  const gradientCx = cx(
    'Gradient absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10'
  )

  return (
    <main className={mainCx}>
      <h1 className={titleCx}>3D Cube example</h1>
      <Cube />
      <Image src='/gradient.png' width={600} height={679} alt='Gradient' className={gradientCx} />
    </main>
  )
}
