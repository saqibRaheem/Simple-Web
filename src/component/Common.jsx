import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Common(props) {
  return (
    <>
        <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid nav_bg">
         <div className='row'>
             <div className='col-10 mx-auto'>
             <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 d-flex justiyf-content-center flex-column">
                   <h1>
              {props.name}
              <strong className='brand-name'> Simple-Web </strong>
                   </h1>
                   <h2 className="my-3">
                       Talented Developer Making Web
                   </h2>
                   <div className="mt-3">
                       <NavLink to={props.visit} className='btn-get-started'>
                          {props.btn}
                       </NavLink>
                   </div>
                 </div>
                 <div className="col-lg-6 order-1 order-lg-2 header-img">
                     <img src={props.imag} className='img-fluid animated' alt="homeimg" />
                 </div>
                 </div>
             </div>
         </div>
        </div>
         
        </section>
    </>
  )
}
