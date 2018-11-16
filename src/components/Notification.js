import React from 'react'

const Notification =(props)=>{
const {message}=props
  return (
    <div>
      <div className='card'>
        <div className='card-title'><h2>Alert</h2></div>
        <div className='card-content'>
          <div className='center '>
            {message}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification