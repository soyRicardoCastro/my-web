"use client"

import Link from 'next/link'
import { useAtom } from "jotai"
import { Hamburger, Logo, Menu, Social } from "."
import { menuActiveAtom } from '../store'

export default function Nav () {
  const [menuActive, setMenuActive] = useAtom(menuActiveAtom)

  return (
    <header className='w-full md:w-3/4 md:mx-auto md:my-2 h-[60px] flex items-center justify-between [backdrop-filter:blur(20px)] px-2 relative z-100'>
      <Link href='/' onClick={() => menuActive && setMenuActive(false)}>
        <Logo />
      </Link>

      <Hamburger />
      
      <Menu visible={menuActive} />

      <ul className="hidden md:flex gap-4 [&>li]:text-xl">
        <li>
          <Link
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}
