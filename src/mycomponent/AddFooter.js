
import React, {useState} from  'react';

export const AddFooter = ({addTodo}) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("please enter some value ");
        }
        
        addTodo(title,desc);

    }

    return (
       

        <div className="container">
           <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>settitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-success">Submit</button>
</form>
            
        </div>
    )
} 
