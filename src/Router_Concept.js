import React from 'react'
import { Switch,Route } from 'react-router';
import { Contact } from './Contact';
import { About } from './About';
// import { Menu } from './Menu';
import { Home } from './Home';
import { Rooms } from './Rooms';
import { ViewPage } from './ViewPage';
import {Navbar} from './Navbar';



export const Router_Concept = () => {
    const Error = ()=>{
        return (

            <h1>this is  error page</h1>
        )
       
        
            
            
        

    }
    
    return (
        <div>
            <Navbar/>

            <Switch>
            <Route exact path='/home' component={Home}/>
            <Route path='/rooms' component={Rooms}/>
                <Route exact path='/' component={Contact}/>
                <Route exact path='/page' component={ViewPage}/>
                <Route exact path='/nav' component={Navbar}/>
            

              
               
                <Route  component = {Error}/>
            </Switch>
           
            
        </div>
    )
}
