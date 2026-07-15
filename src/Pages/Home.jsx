import React from 'react'
import Hero  from '../components/Hero'
import Blogs from '../components/Blogs'
import Content from '../components/Content'
import Static from '../components/Static'
import Ecommerace from '../components/Ecommerace'
import Contact from './Contact'


function Home() {
  return (
    <div>
        <Hero/>
        <Blogs/>
        <Content/>
        <Static/>
        <Ecommerace/>
        <Contact/>
    </div>
  )
}

export default Home
