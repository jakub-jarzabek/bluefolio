import React from 'react'

interface ButtonProps {
  Icon?: React.ReactNode
  title: string
  onClick: () => void
}
export const Button: React.FC<ButtonProps> = ({ Icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`py-3 px-6 bg-violet-spanish font-semibold tracking-widest rounded-md shadow-sm flex flex-row justify-center items-center cursor-pointer hover:bg-violet-600 trasition-colors duration-500 neon-multiple ${
        Icon ? 'justify-around' : ''
      }`}
    >
      {Icon && Icon}
      <p className="text-light-honey">{title}</p>
    </div>
  )
}
