'use client';
import React from 'react'

const  EventHandling = () => {

    const num =403;

    const addNums =(a,b) => {
        return a + b
    }

  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />
        <h1>{num}</h1>
        <h2>{addNums(345,567)}</h2>
        <h4>{ 3 + 7}</h4>
        <button className='btn btn-primary' onClick={ () => { alert('Button was Clicked') } } >Click Me</button>
        <input type="color" onChange={ (e) => { console.log(e.target.value) } } />
        <input type="color" onChange={ (e) => { document.body.style.background = e.target.value } } />


    </div>
  )
}

export default  EventHandling