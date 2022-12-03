import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
  const { portfolioData } = useSelector((state) => state.root)
  const { footer } = portfolioData
  const { title, name } = footer
  return (
    <footer className="py-10 border-t" id="footer">
      <div className="flex items-center justify-center flex-col">
        <span className="text-black"> {title || ''} </span>{' '}
        <span className="text-black"> {name || ''} </span>{' '}
      </div>{' '}
    </footer>
  )
}

export default Footer
