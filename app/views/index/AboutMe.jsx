import Image from 'next/image'

export default function AboutMe () {
  return (
    <section className="w-full px-4 py-16 bg-yellow-400 relative text-black flex flex-col [gap:30px] text-center">
      <div className='flex flex-col items-center justify-center gap-6 md:w-3/4 md:mx-auto'>
        <h3 className='text-2xl md:text-3xl text-center font-black'><span className='fancy-underline-white'>Hi, I{`'`}m Ricardo.</span> A pleasure.</h3>

        <p className="text-xl">
          Since I started my journey as a <strong className="font-semibold">freelance web developer</strong> 2 years ago, I have done remote work for agencies, and collaborated with talented people to create digital products for consumer and commercial use. I am quietly confident, naturally curious and perpetually working to improve my skills.
        </p>

        <Image src="/mf-avatar.svg" alt="Avatar of Ricardo Castro" width={100} height={100} className="w-36 my-4 hidden md:block border border-4 rounded-full" />
      </div>
    </section>
  )
}
