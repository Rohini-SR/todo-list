import React, { useState } from 'react'

export const Todo = () => {
    const [value,setValue] = useState([]);
    // const [newValue,setNewValue] = useState(' ')

    const handleSubmit = ()=>{
      alert('Entered task successfully')
    }

    const handleAdd = (e)=>{
      setValue(e.targer.value)
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text'/>
      <ol>
        {value.map(()=>{
          <li></li>
        })}
      </ol>
        <button type='submit' onChange={handleAdd}>Add</button>
      </form>
    </div>
  )
}
