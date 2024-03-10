import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {

  const dispatch = useDispatch();

  const todos = useSelector((state)=>(
    state.todos
  ));
  console.log(todos);
  return (
    <>
    <ul className='list-none'>
      {todos.map((todo)=>(
        <li
          className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
          key={todo.id}
        >
          <div className='text-white'>{todo.text}</div>
          <button className='bg-red-600 rounded text-white border px-6' onClick={()=>(dispatch(removeTodo(todo.id)))}>Remove</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Todos