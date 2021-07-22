import React from 'react'

export const MyRooms = () => {
    return (
        <div>
            
            <div className="cards">
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card" className="fitt">
                                <img class="card-img-top" src="https://source.unsplash.com/1600x900/?room" alt="Card image cap" />
                                <a href="/page" class="btn btn-success">Family Deluxe</a>

                            </div>
                        </div>
                        

                     
            
                        <div class="col-sm">
                          <div class="card" className="fitt">
                                <img class="card-img-top" src="https://source.unsplash.com/1600x900/?rooms" alt="Card image cap" />
                                <a href="/page" class="btn btn-success"  >Triple Deluxe</a>

                            </div>
                          
                        </div>
                      

                       
                        <div class="col-sm">
                             <div class="card" className="fitt">
                                <img class="card-img-top" src="https://source.unsplash.com/1600x900/?hotel" alt="Card image cap" />
                                <a href="/page" class="btn btn-success">Duble Deluxe</a>

                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>

            
        </div>
    )
}
