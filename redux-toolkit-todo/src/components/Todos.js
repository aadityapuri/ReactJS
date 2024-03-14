import React from 'react'
import { useSelector } from 'react-redux'
import SingleTodo from './SingleTodo';

function Todos() {
  const todos = useSelector((state)=>(
    state.todos
  ));
  return (
    <>
      <ul className='list-none'>
        {todos.map((todo)=>(
          <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}
          >
            <SingleTodo value={todo=todo}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos