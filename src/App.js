import './App.css';
import { Form } from './component/Form';
import { Todo } from './component/Todo';
import { useState } from 'react';

function App(){
  const [input,setInput] = useState([]);
  const [newValue,setNewValue] = useState(' ')
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Form
            value={input}
            setValue={setInput}
            newValue={newValue}
            setNewValue={setNewValue}/>
        </div>
        <div>
          <Todo
          newValue={newValue}
          setNewValue={setNewValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
