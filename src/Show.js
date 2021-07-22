import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export const Show = (props) => {
  
    return (

        <div className="save">
            <div className="delete" onClick={()=>{
                props.delete(props.id);
            } } >
                <DeleteIcon />

            </div>
            <ul>
                <li>{props.text}</li>
            </ul>

        </div>


    )
}
