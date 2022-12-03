import React from 'react'
import { useSelector } from 'react-redux'

export default function Intro() {
  const { portfolioData } = useSelector((state) => state.root)
  const { intro } = portfolioData
  const {
    welcomeText,
    firstName,
    lastName,
    caption,
    description,
    btnText,
    btnLink,
    role,
  } = intro
  return (
    <div
      id="intro"
      className="h-[80vh] bg-white flex flex-col item-start justify-center px-20 gap-8 sm:px-5"
    >
      <h1 className="text-black sm:pt-20 sm:mt-20 ">{welcomeText || ''}</h1>
      <h2 className="text-8xl sm:text-3xl   text-secondary font-semibold">
        {firstName || ''} {lastName || ''}
      </h2>
      <h2 className="text-6xl sm:text-3xl  text-primary font-semibold">
        {caption || ''}
      </h2>
      <p className="text-black w-2/3">{description || ''}</p>
      <a href={btnLink || '#contact'}>
        <button
          className="border-2 border-black text-black px-5 py-3 rounded w-[150px]"
          role={role || 'button'}
          aria-label={btnText}
        >
          {btnText || 'Get Staeted now!'}
        </button>
      </a>
    </div>
  )
}
