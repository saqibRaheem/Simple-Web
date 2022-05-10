import React from 'react'
// import img from '../images/s1.jpg'
export default function Card(props) {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
        <div className="card" >
           <img src={props.imgsrc} className="card-img-top img-fluid" alt="images" />
              <div className="card-body">
                  <h5 className="card-title font-weight-bold">{props.title} </h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
       </div>
  </div>

    
    </>
  )
}
