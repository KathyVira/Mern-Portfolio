import React from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { experiences } from '../../resources/experiences'
import { useSelector } from 'react-redux'

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  const { portfolioData } = useSelector((state) => state.root)
  const { experiences } = portfolioData

  return (
    <div id="experiences">
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 sm:flex-col px-20">
        <div className="flex flex-col gap-8 border-l-2 border-primary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index)
              }}
              className="cursor-pointer w-60 pl-5 py-1"
            >
              <h3
                className={`text-xl  ${
                  selectedItemIndex === index
                    ? 'text-secondary border-secondary border-l-4 -ml-[23px] pl-5 bg-[#00000017] py-2 sm:w-full'
                    : 'text-black'
                }`}
              >
                {experience.period}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h4>
          <h5 className="text-primary text-xl">
            {experiences[selectedItemIndex].company}
          </h5>
          <p className="text text-black">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Experiences
