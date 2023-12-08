import React from 'react'
import Navbar from '../../components/Nav/NavBar'
import Fotter from '../../components/Fotter/Fotter'
import Landing from './Landing'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Fotter />
    </div>
  )
}

export default Home