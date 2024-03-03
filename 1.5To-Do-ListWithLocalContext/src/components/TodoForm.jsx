import React, { useContext, useState } from 'react'
import { TodoContext, useTodo } from '../contexts';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const {addTodo} = useTodo();

  const onSubmitForm = (e)=>{
    e.preventDefault();
    if(!todo) return;
    addTodo({todo});
    setTodo('')
  }

  return (
    <form onSubmit={onSubmitForm} className='flex'>
      <input type='text'
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        placeholder='Write TODO...'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
      <button 
        type='submit'
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >
        Add To List
        </button>
    </form>
  )
}

export default TodoForm