"use client"

import Link from 'next/link'
import { useAtom } from "jotai"
import { Hamburger, Logo, Menu } from "."
import { menuActiveAtom } from '../store'

export default function Nav () {
  const [menuActive, setMenuActive] = useAtom(menuActiveAtom)

  return (
    <header className='w-full h-[60px] flex items-center justify-between [backdrop-filter:blur(20px)] px-2 relative z-100'>
      <Link href='/' onClick={() => setMenuActive(prev => !prev)}>
        <Logo />
      </Link>

      <Hamburger />
      
      <Menu visible={menuActive} />
    </header>
  )
}
