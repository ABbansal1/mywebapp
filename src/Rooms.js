import React from 'react'
import  {MyRooms} from './MyRooms';

export const Rooms = () => {
    return (
        <div>
            <div className="any">
            <div className="home">
                    <h1> Our Rooms </h1>
                    <span className="line"></span>
                    <p>Deluxe Rooms Starting At $299</p>
                    <button>Return Home </button>
                </div>
            </div>
             <div className="text-center my-5 " style={{fontSize:"30px" }}>
                All Awesomes Rooms
            </div>
            <MyRooms title = "Family"/>
            <br /><br />

            <MyRooms title = "Triple"/>
            <br /><br  />
        
            <MyRooms title = "Double"/>
            <br /><br />

          
           

        </div>
    )
}
