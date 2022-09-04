import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-2 z-40 flex flex-row w-[95%] mx-auto h-14 py-2 px-4 fixed top-0 rounded-xl  justify-between items-center shadow-md left-1/2 -translate-x-1/2 glass bg-light-honey">
      <img
        src="https://streamsentials.com/wp-content/uploads/2021/01/pepehands-transparent-pic.png"
        className="h-full shadow-xl"
      />
      <div className="flex flex-row gap-4 items-center">
        <p
          onClick={() => navigate('/')}
          className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-spanish  hover:bg-violet-spanish hover:text-light-honey transition-colors duration-300 cursor-pointer"
        >
          Home
        </p>
        <p
          onClick={() => navigate('admin')}
          className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-spanish hover:bg-violet-spanish hover:text-light-honey transition-colors duration-300 cursor-pointer"
        >
          Admin
        </p>
      </div>
    </div>
  )
}
