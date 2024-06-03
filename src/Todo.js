import React, { useState } from 'react'

export const Todo = () => {
  const [value,setValue] = useState([]);
  const [newValue,setNewValue] = useState(' ')

  const handleInputChange = (e)=>{
    setNewValue(e.target.value)
  }

  const addValue = ()=>{
    if(newValue.trim() !== ""){
      setValue(v => [...value, newValue])
      setNewValue(" ");
    }
    else{
      alert('Enter the Task...')
    }
  }

  const deleteValue = (index)=>{
    const updateValue = value.filter((_, i)=> i !== index)
    setValue(updateValue)
  }

return (
  <div>
    <input
      type='text'
      placeholder='Enter the task...'
      value={newValue}
      onChange={handleInputChange}/>

      <button onClick={addValue}>Add</button>

      <ol>
        {
          value.map((value,index)=>(
            <li key={index}>
              <span>{value}</span>
              <button onClick={deleteValue}>Delete</button>
            </li>
          ))
        }
      </ol>
  </div>
)
}

