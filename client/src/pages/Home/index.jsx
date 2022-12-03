import React from 'react'
import Header from '../../components/Header'
import About from './About'
import Experiences from './Experiences'
import Intro from './intro'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'

export default function Home() {
  const { portfolioData } = useSelector((state) => state.root)

  return (
    <div className="bg-white " id="index">
      <Header />
      <nav className="fixed  top-20 sm:hidden">
        <ul>
          <li className="p-2 m-2 border ">
            <a href="#home">Up</a>
          </li>
          <li className="p-2 m-2 border">
            <a href="#aboutme">About me</a>
          </li>
          <li className="p-2 m-2 border">
            <a href="#experiences">Experiences</a>
          </li>
          <li className="p-2 m-2 border">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2 m-2 border">
            <a href="#courses">Courses</a>
          </li>
          <li className="p-2 m-2 border">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {portfolioData && (
        <main className="bg-white px-40 sm:px-2 md:px-5">
          <div>
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Courses />
            <Contact />
            <Footer />
            <LeftSider />
          </div>
        </main>
      )}
    </div>
  )
}
