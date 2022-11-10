import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='My Lastest Work' message='These are photos from Oslo fashion week.' />
        <Portfolio />
    </div>
  )
}

export default work