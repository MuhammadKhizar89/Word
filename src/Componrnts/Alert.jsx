import React from 'react'

export const Alert = (props) => {
  return (
    <div style={{ height:'50px'}}>
    {
    
        props.aler&& <div className="alert alert-success" role="alert">
        {props.aler.condi}-{  props.aler.message}
      </div>
      
    }
    </div>
  )
}
