import React from 'react'
// import { v4 as uuidv4 } from 'uuid';

export const Form = ({input,setInput,newValue,setNewValue}) => {
  const handleInputChange = (e)=>{
    setNewValue(e.target.value)
  }
  // const onFormSubmit = (e)=>{
  //   e.preventDefault();
  //   setNewValue([...newValue, {id: uuidv4(), title: value, completed: false}]);
  //   setValue(" ")
  // }

  // const addValue = ()=>{
  //   if(newValue.trim() !== ""){
  //     setValue(v => [...value, newValue])
  //     setNewValue(" ");
  //   }
  //   else{
  //     alert('Enter the Task...')
  //   }
  // }

  // const deleteValue = (index)=>{
  //   const updateValue = value.filter((_, i)=> i !== index)
  //   setValue(updateValue)
  // }


  return (
    <form>
       <input
        type='text'
        placeholder='Enter the task...'
        className='task-input'
        value={input}
        required
        onChange={handleInputChange}/>
       <button className='button-add' type='submit'>Add</button>
    </form>
  )
}
