import React from 'react'
import { useSelector } from 'react-redux'

function LeftSider() {
  const { portfolioData } = useSelector((state) => state.root)
  const { socialLink } = portfolioData
  return (
    <div className="fixed left-0 bottom-0 px-20 sm:static ">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-4 sm:flex-row text-gray-600">
          {socialLink.map((sociallinks) => (
            <a href={sociallinks.link}>
              <span className="hidden">{sociallinks.title}</span>
              <i className={sociallinks.icon}></i>
            </a>
          ))}
        </div>

        <div className="w-[1px] h-32 bg-[#8a8a8a] sm:hidden"></div>
      </div>
    </div>
  )
}

export default LeftSider
