import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

function About() {
  const { portfolioData } = useSelector((state) => state.root)
  const { about } = portfolioData
  const {
    lottieURL,
    alt,
    description1,
    description2,
    skils,
    skilsFront,
    skilsBack,
  } = about

  return (
    <div className="" id="aboutme">
      <SectionTitle title="About me" />

      <div className="flex w-full items-center sm:flex-col ">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src={
              lottieURL ||
              'https://assets1.lottiefiles.com/packages/lf20_lcsx30ez.json'
            }
            background="transparent"
            speed="1"
            autoplay
            alt={alt || ''}
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2  sm:w-full">
          <b className="text-black">
            {description1 || 'Precision, Commitment and Creativity.'}
          </b>
          <p className="text-black">
            {description2 ||
              `I am Kathy, a Full-Stack developer experienced with React, MongoDB
            and NodeJS. With the ability to build end-to-end web marketplace
            platforms with secure authentication and easy access for customers.
            Motivated for my next challenge in a company that is looking for a
            dedicated and team player developer to develop its core application.`}
          </p>
        </div>
      </div>

      <div className="py-5 px-20">
        <h2 className="text-black text-xl">
          Here are a few technologies I've been working with recently:
        </h2>
        <div className="flex flex-wrap gap-10 mt-5">
          {skils.map((skill, index) => (
            <div className="border  py-3 px-10 skill">
              <h2 className=" ">{skill}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="py-5 px-20">
        <h2 className="text-black text-xl">
          Here are a few FRONT helpers I've used recently:
        </h2>
        <div className="flex flex-wrap gap-10 mt-5 ">
          {skilsFront.map((skilsFronts, index) => (
            <div className="border  py-3 px-10 helper">
              <h2 className="">{skilsFronts}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5 px-20">
        <h2 className="text-black text-xl">
          Here are a few BACK helpers I've used recently:
        </h2>
        <div className="flex flex-wrap gap-10 mt-5 ">
          {skilsBack.map((skilsBacks, index) => (
            <div className="border  py-3 px-10 helper">
              <h2 className="">{skilsBacks}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
