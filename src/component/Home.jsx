import React from 'react'
import img from '../images/imag2.png'
import Common from './Common'

export default function Home() {
  return (
    <>
        <Common 
            name='Grow Your Business With'
            btn='Get Start'
            visit='/about'
            imag={img}
        />
    </>
  )
}
