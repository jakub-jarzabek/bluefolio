import { Auth } from 'aws-amplify'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/blue.png'

export const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div
      className={` z-40 flex flex-row w-[95%] mx-auto h-16 py-2 px-4 fixed ${
        show ? 'top-4' : '-top-32'
      } rounded-xl  justify-between items-center left-1/2 -translate-x-1/2 glass bg-light-honey neon-light transition-all duration-300`}
    >
      <div className="h-full flex flex-row gap-4">
        <img src={logo} className="h-full shadow-xl rounded-full neon-light" />
        <div className="flex flex-col justify-center gap-1 translate-y-0.5">
          <p className="text-blue-400 font-mono leading-none text-xl tracking-widest text-neon">
            Kacper
          </p>
          <p className="text-blue-400 font-mono leading-none text-xl tracking-widest text-neon">
            Biegajło
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <p
          onClick={() => navigate('/')}
          className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-russian  hover:bg-violet-russian hover:text-light-honey transition-colors duration-300 cursor-pointer neon-light"
        >
          Home
        </p>
        {location.pathname !== '/admin' ? (
          <p
            onClick={() => navigate('admin')}
            className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-russian hover:bg-violet-russian hover:text-light-honey transition-colors duration-300 cursor-pointer neon-light"
          >
            Admin
          </p>
        ) : (
          <p
            onClick={() => Auth.signOut().then(() => navigate('home'))}
            className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-russian hover:bg-violet-russian hover:text-light-honey transition-colors duration-300 cursor-pointer"
          >
            Log Out
          </p>
        )}
      </div>
    </div>
  )
}
