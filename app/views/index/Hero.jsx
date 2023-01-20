import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-8 px-3 flex items-center justify-evenly flex-col min-h-[calc(100vh-50px)] md:w-3/4 md:mx-auto">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className='flex flex-col gap-8'>
          <h3 className="text-3xl md:text-6xl md:text-left md:w-3/4 font-bold text-center">Frontend, Backend & Mobile <span className='fancy-underline [z-index:-1]'>Developer</span></h3>
          <h4 className="text-center text-md font-thin md:text-xl md:font-semibold md:text-left md:w-3/4">
            I do what I love, I love developing, and I create solutions.
          </h4>
        </div>

        <Image src='/rocket-animation.gif' alt='Rocket Gif' width={300} height={300} className='hidden md:block' />
      </div>


      <div className='flex items-center flex-col justify-center gap-4'>
        <Image src="/mf-avatar.svg" alt="Avatar of Ricardo Castro" width={100} height={100} className="w-36 mt-4 md:hidden" />

        <div className="flex items-center justify-center flex-col gap-2 mt-6">
          <div className="w-[1px] h-14 bg-gray-200" />

          <p className="font-thin font-italic text-sm md:text-md md:font-normal [font-style:italic]">Scroll Down</p>

          <div className='flex gap-1 items-end'>
            <span className="w-[1px] h-3 bg-gray-200 [transform:rotate(-35deg)_translateX(1px)_translateY(1px)] rounded-md [z-index:-1]" />
            <span className="w-[1px] h-4 [transform:translateY(-0.6px)] bg-gray-200 rounded-md [z-index:-1]" />
            <span className="w-[1px] h-3 [transform:rotate(35deg)_translateX(-1.3px)_translateY(1px)] rounded-md bg-gray-200 [z-index:-1]" />
          </div>
        </div>
      </div>

      <div className='relative'>
        <Image
          src="/rocket-game.gif"
          alt="Gif rocket game"
          width={100}
          height={10}
          className="z-100"
        />
      </div>
    </section>
  )
}
