import React from 'react'
import img from '../images/imag2.png'
import Common from './Common'

export default function About() {
  return (
   <Common 
     name='WellCome To About Page'
            btn='Contact '
            visit='/contact'
            imag={img}
   />
  )
}
