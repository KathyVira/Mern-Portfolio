import React from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { courses } from '../../resources/courses-data'
import { useSelector } from 'react-redux'

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  const { portfolioData } = useSelector((state) => state.root)
  const { course } = portfolioData
  return (
    <div id="courses">
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col px-20">
        <div className="flex flex-col gap-8 border-l-2 border-primary w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {course.map((courses, index) => (
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
                {courses.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Course data */}
        <div className="flex flex-col gap-5">
          <h2 className="text-secondary text-2xl">
            {course[selectedItemIndex].title}
          </h2>

          <p className="text text-black">
            {course[selectedItemIndex].description}
          </p>
          <div className="flex flex-wrap gap-10 mt-5">
            {course[selectedItemIndex].technologies.map((technologe) => (
              <div className="border  py-3 px-10 technologe">
                <h3 className="">{technologe}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            alt={course[selectedItemIndex].title}
            className="text-primary text-xl w-80 "
            src={course[selectedItemIndex].image}
          />
        </div>
      </div>
    </div>
  )
}

export default Courses
