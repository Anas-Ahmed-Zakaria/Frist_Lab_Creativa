import React from 'react'
import './FunctionalProps.css'
export const FunctionalProps = ({fname , lname , age , address , children}) => {
  return (
    <div className='parent'>
    <div className='functionProps'>
        <p>My Name is : {fname} {lname}, and my age is : {age}, and my address is : {address}</p>
        {children}
    </div>

    </div>
  )
}
