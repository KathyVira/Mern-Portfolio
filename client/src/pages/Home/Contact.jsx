import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

function Contact() {
  const { portfolioData } = useSelector((state) => state.root)
  const { contact } = portfolioData
  // const { name, email, gender, mobile, address, languages, lottieURL, alt} = contact

  return (
    <div id="contact">
      <SectionTitle title="Say Hello" />

      <div className="flex px-20 Monospace sm:flex-col items-center justify-around mt-[-80px]">
        <div className="flex flex-col gap-1">
          <div className="text-black">{'{'}</div>
          {Object.keys(contact).map(
            (key) =>
              key !== '_id' && (
                <div className="px-10">
                  <span className="text-black">"{key}"</span> :
                  <span className="text-black"> "{contact[key]}",</span>
                </div>
              ),
          )}
          <div className="text-black">{'}'}</div>
        </div>
        <div className="h-[500px] ">
          <lottie-player
            src={contact.lottieURL}
            background="transparent"
            speed="1"
            autoplay
            alt={contact.alt}
          ></lottie-player>
        </div>
      </div>
    </div>
  )
}

export default Contact
