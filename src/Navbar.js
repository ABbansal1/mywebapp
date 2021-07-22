import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [menu, setmenu] = useState(false);
    let something ;
    if(menu){
        something = <div className="mobail-view">
            <ul>
            <li class="nav-item">
                            <NavLink exact activeClassName="active"  to="/Home">Home</NavLink>

                        </li>
                        <li class="nav-item">
                            <NavLink exact activeClassName="active"  to="/rooms">Rooms</NavLink>

                        </li>
                        <li class="nav-item">
                            <NavLink exact  to="/">Contact</NavLink>

                        </li>

            </ul>
        </div>
    }

   
    return (
        <div>
           <div className="main-nav">
               <div className="logo">
                   <h2 className="">Beach Resort</h2>
               </div>
               <div className="nav-link">
                   <ul>
                       <li><a href="/Home">Home</a></li>
                       <li><a href="/rooms">Rooms</a></li>
                       <li><a href="/">Contact</a></li>
                   </ul>
               </div>

           </div>
           <button className="show" onClick={()=>setmenu(!menu)}>show Menu</button>
           {something}
             
           
            

        </div>
    )
}
