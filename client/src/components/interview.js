import React from 'react';
import Divider from '@material-ui/core/Divider';

const Interview= ({item}) =>{
    const date= new Date(parseInt(item.startTime)).toLocaleDateString()
    const startTime= new Date(parseInt(item.startTime)).toLocaleTimeString('en-IN',{hour12: false,hour: 'numeric',minute: 'numeric'})
    const endTime= new Date(parseInt(item.endTime)).toLocaleTimeString('en-IN',{hour12: false,hour: 'numeric',minute: 'numeric'})
    
    return (
        <div>
            
            <span style={{fontFamily: "bold"}}>Users :- </span>
                {item.email.map( (email,index) =>(<span style={{fontFamily: "initial"}} key={index} >{email} &nbsp;&nbsp; </span> ))}
            <br/>
            <span style={{fontFamily: "verdana"}}> Day : {date}<br/> </span>
            Start time :
            <span style={{fontFamily: "courier"}}> {startTime}<br/> </span>
            End time : 
            <span style={{fontFamily: "courier"}}> {endTime}<br/> </span>
            <hr/>
        </div>
        
    )
}
export default Interview;