import React from 'react'
import LocalBarIcon from '@material-ui/icons/LocalBar';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import { About } from './About';

export const Home = () => {
    return (

        <>
            <div className="container-fluid demo">

                <div className="home">
                    <h1> Luxurious Rooms </h1>
                    <span className="line"></span>
                    <p>Deluxe Rooms Starting At $299</p>
                    <button><a href="/rooms">Our Rooms</a> </button>
                </div>

            </div>
            <div className="second">
                <h1 className="text-center"  >Service</h1>
                <div class="container">
                    <div class="row ">
                        <div class="col-sm particular">
                           <i ><AirlineSeatReclineExtraIcon className="biger"></AirlineSeatReclineExtraIcon> </i>
                           <h5>5 start facility</h5>
                           <p>All the most useable things are avaiable and persnal discount option are availabail </p>
                        </div>
                        <div class="col-sm particular">
                        <i > <LocalBarIcon className="biger"></LocalBarIcon></i>
                           <h5>Strong beer</h5>
                           <p>All the most useable things are avaiable and persnal discount option are availabail </p>
                        </div>
                        <div class="col-sm particular">
                        <i ><DirectionsRunIcon className="biger"></DirectionsRunIcon></i>
                           <h5>Hiking facility</h5>
                           <p>All the most useable things are avaiable and persnal discount option are availabail </p>
                        </div>
                    </div>
                </div>
            </div>
            <About></About>

        </>
    )
}
