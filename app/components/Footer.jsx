import Link from 'next/link'
import { Social } from '.'

export default function Footer () {
  return (
    <footer className='bg-yellow-400 text-black flex flex-col justify-center items-center py-6 px-3 gap-6'>
      <h3 className='text-2xl md:text-3xl text-black font-bold text-center'>This is the end, or not?</h3>

      <ul role='navigation' className='flex items-center justify-center gap-4 text-md [&>li]:transition [&>li]:hover:underline [&>li]:ease md:[&>li]:text-xl'>
        <li>
          <Link href='/'>Home</Link>  
        </li>
        <li>
          <Link href='/projects'>Projects</Link>  
        </li>
        <li>
          <Link href='/contact'>Contact Me</Link>  
        </li>
      </ul>

      <Social dark />

      <h3 className="text-3xl font-black [letter-spacing:4px]">[RC]</h3>

      <small className='text-center text-md font-base'>
      Made with ❤️ and <strong className='font-bold'>NextJS</strong> by <span className='fancy-underline-white font-semibold text-gray-900'>Ricardo Castro</span>
      </small>
    </footer>
  )
}
