import React from 'react'

export const About = () => {
  return (
    <>
    <div className="text-center my-5"><h3>Featured Rooms</h3> </div>
   
    <div>
      <div class="container">
        <div class="row my-4">
          <div class="col-sm">
          <div class="card" className="fitt">
              <img class="card-img-top" src="https://source.unsplash.com/1600x900/?house" alt="Card image cap" />
              
              
               
                <a href="#" class="btn btn-success">Family Deluxe</a>
              
            </div>
          </div>
          <div class="col-sm">
            <div class="card" className="fitt" >
              <img class="card-img-top" src="https://source.unsplash.com/1600x900/?room" alt="Card image cap" />
          
                <a href="#" class="btn btn-warning">Doble Delxue</a>
              
            </div>
          </div>
          <div class="col-sm">
            <div class="card" className="fitt">
              <img class="card-img-top" src="https://source.unsplash.com/1600x900/?kichen" alt="Card image cap" />
              
                
               
                <a href="#" class="btn btn-primary">Triple Deluxe</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
