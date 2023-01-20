"use client"

import Link from 'next/link'
import { useAtom } from "jotai"
import { menuActiveAtom } from '../store'

import { Social } from ".";

export default function Menu () {
  const [menuActive, setMenuActive] = useAtom(menuActiveAtom)

  const toggleMenuActive = () => setMenuActive(prev => !prev)

  const divsClass = `w-full h-[calc(100vh-60px)] absolute inset-0 mt-[60px] ${menuActive && 'active-menu'}`

  return (
    <>
    <div className={`bg-black/90 menu-slider-1 ${divsClass}`} />
    <div className={`bg-yellow-500 menu-slider-2 ${divsClass}`} />
    <div className={`bg-orange-500 menu-slider-3 ${divsClass}`} />

    <nav className={`fixed flex items-center justify-center md:hidden inset-0 w-full min-h-screen mt-[60px] menu -z-10 bg-black/90 ${menuActive && "active-menu"}`}>
      <ul className="flex flex-col text-gray-200 font-extrabold gap-12">
        <li>
          <Link
            href="/"
            className="text-3xl transition delay-200 stroke-link"
            onClick={toggleMenuActive}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-3xl transition delay-200 stroke-link"
            onClick={toggleMenuActive}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-3xl transition delay-200 stroke-link"
            onClick={toggleMenuActive}
          >
            Contact
          </Link>
        </li>
        <li className="flex gap-6">
          <Social />
        </li>

        <li className="mt-[25px] text-xs text-center font-thin text-gray-300">Made with ❤️ by <span className="font-bold">Ricardo Castro</span></li> 
      </ul>
    </nav>
    </>
  )
}
