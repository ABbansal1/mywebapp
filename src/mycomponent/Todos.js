import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
    return (
      
           <div className="container">
               <h3 className="text-center">list Item</h3>
               {props.todos.length===0? "no todos are here" : 
               props.todos.map((todo)=>{
                   return  <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete}/>
               })
               }
               
            </div>
            
      
    )
}
