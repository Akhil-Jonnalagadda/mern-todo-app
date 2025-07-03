import React, { useState } from 'react';
import axios from 'axios'
function Create({ setTodos }) {
    const [task, setTask] = useState()
    const addTodo =() =>{

    }
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos(prev => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter todo"
      />
      <button type="button" onClick={addTodo}>Add</button>
    </div>
  );
}

export default Create;
