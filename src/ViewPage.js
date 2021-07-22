import React from 'react'

export const ViewPage = (props) => {
    return (

        <div>
            <div className="another">
                <div className="home">
                    <h1> {props.title}  Deluxe Room </h1>
                    <span className="line"></span>

                   <a href="/Home" className="btn btn-primary">Back Home</a>
                </div>

            </div>
            <div className="images">
                <div class="container">
                    <div class="row">
                        <div class="col-sm my-5">
                            <div class="card" className="fitt">
                                <img class="card-img-top" src="https://source.unsplash.com/1600x900/?badroom" alt="Card image cap" />


                            </div>


                        </div>
                        <div class="col-sm my-5">

                            <div class="card" className="fitt">
                                <img class="card-img-top" src="https://source.unsplash.com/1600x900/?bathroom" alt="Card image cap" />


                            </div>

                        </div>
                        <div class="col-sm my-5">
                            <div class="card" className="fitt">
                                <img class="card-img-top" src="https://source.unsplash.com/1600x900/?kitchen" alt="Card image cap" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col my-5 up"  >
                        <h5 className="text-center">Details</h5>
                        <p  style={{justifyContent:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas veniam laudantium cum 
                        incidunt? Laborum dicta iusto eaque consequuntur temporibus. Beatae distinctio provident omnis error
                         aliquam ut reprehenderit voluptatibus voluptatum adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, magnam alias. Cupiditate magnam omnis amet ipsam perferendis dolore facilis, repudiandae recusandae provident impedit! 
                         Tempora dolores animi aspernatur cumque error quidem.</p>

                    </div>
                    <div class="col my-5 down ">
                        <h5 className="left">Info</h5>
                        <ul className="right">
                            <li>price :  300$</li>
                            <li>size : 400 SQRT</li>
                            <li>Max capacity : 1 person</li>
                            <li>pets Allowed </li>


                        </ul>
                    </div>
                </div>
                </div>






        </div>
    )
}
