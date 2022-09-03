import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row w-screen h-14 py-2 px-4 fixed top-0 rounded bg-light-honey justify-between items-center shadow-md">
      <img src="https://streamsentials.com/wp-content/uploads/2021/01/pepehands-transparent-pic.png" className='h-full shadow-xl'/>
      <div className="flex flex-row gap-4 items-center">
        <p className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-spanish  hover:bg-violet-spanish hover:text-light-honey transition-colors duration-300 cursor-pointer">
          Home
        </p>
        <p className=" px-3 py-1 rounded-xl text-md text-violet-russian font-semibold tracking-wide border-2 border-violet-spanish hover:bg-violet-spanish hover:text-light-honey transition-colors duration-300 cursor-pointer">
          Login
        </p>
      </div>
    </div>
  );
};
