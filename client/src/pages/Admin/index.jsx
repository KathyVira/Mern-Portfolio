import React, { useEffect } from 'react'
import Headers from '../../components/Header'
import { Tabs } from 'antd'
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
// const { TabPene } = Tabs
import { useSelector } from 'react-redux'
import AdminExperiences from './AdminExperiences'
import AdminProjects from './AdminProjects'
import AdminCourses from './AdminCourses'
import AdminContact from './AdminContact'
import AdminFooter from './AdminFooter'
import AdminSocialLink from './AdminSocialLink'

function Admin() {
  const { portfolioData } = useSelector((state) => state.root)
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = '/admin-login'
    }
  }, [])

  return (
    <div>
      <Headers />

      <div className="flex gap-5 items-center py-5 sm:pt-40 px-3 justify-between">
        <div className="flex gap-5 items-center">
          <h1 className="text-3xl sm:text-xl text-primary ">Portfolio Admin</h1>
          <div className="w-60 h-[1px] sm:w-20 bg-gray-500"></div>
        </div>
        <h1
          className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem('token')
            window.location.href = '/admin-login'
          }}
        >
          Logout
        </h1>
      </div>
      <div className="m-10">
        {portfolioData && (
          <Tabs role="tab">
            <Tabs.TabPane tab="Intro" key="item-1">
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="item-2">
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experiences" key="item-3">
              <AdminExperiences />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="item-4">
              <AdminProjects />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Courses" key="item-5">
              <AdminCourses />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contacts" key="item-6">
              <AdminContact />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Footer" key="item-7">
              <AdminFooter />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Social Link" key="item-8">
              <AdminSocialLink />
            </Tabs.TabPane>
          </Tabs>
        )}
      </div>
    </div>
  )
}

export default Admin
