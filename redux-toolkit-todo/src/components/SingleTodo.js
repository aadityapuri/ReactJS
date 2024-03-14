import React, { useState } from 'react';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

function SingleTodo(todo) {
  const [updateText, setUpdatedText] = useState(todo.value.text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleUpdatedText = (e)=>{
    setUpdatedText(e.target.value);
  }

  const handleUpdateButton = (e)=>{
    const val = {...todo.value, text:updateText}
    console.log(val)
    if(isEditable) dispatch(updateTodo({...todo.value, text:updateText}))
    setIsEditable(!isEditable)
  }

  return (
    <>
      <input 
        type='text'
        className='border-none text-black'
        value={updateText}
        onChange={handleUpdatedText}
        readOnly={!isEditable}
      />
      <button 
        className='bg-gray-600 rounded text-white border px-6'
        onClick={handleUpdateButton}
      >
      Update
      </button>
      <button 
        className='bg-red-600 rounded text-white border px-6' 
        onClick={()=>(dispatch(removeTodo(todo.value.id)))}
      >
      Remove
      </button>
    </>
  )
}

export default SingleTodo