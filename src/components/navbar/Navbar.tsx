import { Auth } from 'aws-amplify'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/blue.png'

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className="mt-2 z-40 flex flex-row w-[95%] mx-auto h-14 py-2 px-4 fixed top-0 rounded-xl  justify-between items-center shadow-md left-1/2 -translate-x-1/2 glass bg-light-honey">
      <div className="h-full flex flex-row gap-2">
        <img src={logo} className="h-full shadow-xl" />
        <div className="flex flex-col justify-center gap-1 translate-y-0.5">
          <p className="text-blue-400 font-semibold leading-none text-md tracking-widest">
            Kacper
          </p>
          <p className="text-blue-400 font-semibold leading-none text-md tracking-widest">
            Biegajło
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <p
          onClick={() => navigate('/')}
          className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-russian  hover:bg-violet-russian hover:text-light-honey transition-colors duration-300 cursor-pointer"
        >
          Home
        </p>
        {location.pathname !== '/admin' ? (
          <p
            onClick={() => navigate('admin')}
            className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-russian hover:bg-violet-russian hover:text-light-honey transition-colors duration-300 cursor-pointer"
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
