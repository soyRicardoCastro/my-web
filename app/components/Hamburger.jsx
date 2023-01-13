"use client"

import { useAtom } from "jotai"
import { menuActiveAtom } from '../store'

export default function Hamburger () {
  const [menuActive, setMenuActive] = useAtom(menuActiveAtom)

  return (
    <button
      className="bg-transparent overflow-hidden"
      onClick={() => setMenuActive(prev => !prev)}
    >
      <svg
        stroke="#fff"
        fill="none"
        className={`hamburger ${menuActive && "clicked"}`}
        viewBox="-10 -10 120 120"
        width="40"
      >
        <path
          className="line"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        />
      </svg>
    </button>
  )
}
