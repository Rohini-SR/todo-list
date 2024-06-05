// import React, { useState } from 'react'

export const Todo = ({newValue,setNewValue}) => {

return (
  <div>
    {/* {
      newValue.map((index,newValue)=>(
        <li className='list-item' key={index}>
          <input
            type='text'
            className='list'
            onChange={(e)=> e.preventDefault()}
          />
          <div>
            <button className="button-complete task-button">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-check-edit"></i>
            </button>
            <button className="button-delete task-button">
              <i className="fa fa-check-trash"></i>
            </button>
          </div>

        </li>
      ))
    } */}
  </div>

  // <div className='header'> 
  //   <h1>ToDo List</h1>
  //   <input
  //     type='text'
  //     placeholder='Enter the task...'
  //     value={newValue}
  //     onChange={handleInputChange}/>

  //     <button onClick={addValue}>Add</button>

  //     <ol>
  //       {
  //         value.map((value,index)=>(
  //           <li key={index}>
  //             <span>{value}</span>
  //             <button onClick={()=>deleteValue(index)}>Delete</button>
  //           </li>
  //         ))
  //       }
  //     </ol>
  // </div>
)
}

