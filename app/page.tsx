import React from 'react'
import MyHeader from './components/MyHeader'
import MyHero from './components/MyHero'
import MyFooter from './components/MyFooter'
import MyLogoCloud from './components/MyLogoCloud'

const Home = () => {
  return (
    <div>
      <MyHero />
      {/* <MyLogoCloud /> */}
      <MyFooter />
    </div>
  )
}

export default Home