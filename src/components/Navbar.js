import React, { useEffect, useState } from "react"

const Navbar = ({ setIsOpen }) => {
  const isBrowser = () => typeof window !== "undefined"

  const detectScroll = () => {
    if (isBrowser) return window.pageYOffset
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [detectScroll])

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!isScrolled) {
        setIsScrolled(true)
      }
    } else {
      if (isScrolled) {
        setIsScrolled(false)
      }
    }
  }

  return (
    <nav
      className={`fixed z-10 ${
        isScrolled ? "border-b-2" : "border-none"
      } w-full top-0 bg-white`}
    >
      <div className="flex justify-between items-center px-6 py-4 lg:w-4/5 lg:mx-auto">
        <div>
          <a href="/">
            <span className="text-sm text-theme font-bold"><img src="/logo.svg" alt="" /></span>
          </a>
        </div>

        <ul className="hidden lg:flex gap-x-12">
          <li className="text-xl" onClick={() => setIsOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="text-xl" onClick={() => setIsOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li className="text-xl" onClick={() => setIsOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="lg:hidden" onClick={() => setIsOpen(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12ZM4 16C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16H4Z"
              fill="#6070FF"
            />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
