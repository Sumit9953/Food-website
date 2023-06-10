import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'


const About = () => {
  return (
    <div>
        <h1>About</h1>
        {/* <Outlet /> */}

        {/* Next way to render profile */}

        <ProfileClass name = {"sumit"} />

    </div>
  )
}

export default About