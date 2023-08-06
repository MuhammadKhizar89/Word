import React from 'react'

export const Alert = (props) => {
  return (
    <div style={{ height:'50px'}}>
    {
    
        props.aler&& <div class="alert alert-success" role="alert">
        {props.aler.condi}-{  props.aler.message}
      </div>
      
    }
    </div>
  )
}
