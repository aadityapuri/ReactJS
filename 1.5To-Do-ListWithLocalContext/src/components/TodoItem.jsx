import React, { useContext, useState } from 'react'
import { useTodo } from '../contexts/todoContext'

function TodoItem({todo}) {
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const [isEditable, setIsEditable] = useState(false)

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const updateCurrentTodo = ()=>{
    updateTodo(todo.id, {...todo, todo:todoMsg});
    setIsEditable(false);
  }

  const deleteCurrentTodo = ()=>{
    deleteTodo(todo.id);
  }

  const completedTodo = ()=>{
    toggleComplete(todo.id);
  }

  return (
    <div className={`flex border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed? 'bg-[#c6e9a7]':'bg-[#ccbed7]'}`}>
      <input 
        className='cursor-pointer'
        type='checkbox'
        checked={todo.completed}
        onChange={completedTodo}
      />
      <input 
        type='text'
        className={`border outline-none w-full rounded-lg bg-transparent ${isEditable? 'border-black/10 px-2':'border-transparent'}`}
        value={todoMsg}
        readOnly={!isEditable}
        onChange={(e)=>setTodoMsg(e.target.value)}
      />
      <button
      className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
      onClick={(e)=>{
        if(todo.completed) return;
        if(isEditable){
          updateCurrentTodo();
        }
        else{
          setIsEditable(!isEditable);
        }
      }}
      disabled={todo.completed}
      >
      {isEditable?"📁": "✏️"}
      </button>
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={deleteCurrentTodo}
      >❌
      </button>
    </div>
  )
}

export default TodoItem