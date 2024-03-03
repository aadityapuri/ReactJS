import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev)=> [{id:Date.now(), ...todo},...prev]);
  }

  const updateTodo = (id, todo)=>{
    setTodos((prevTodo) => prevTodo.map((prev)=>(
      prev.id === id ? todo : prev
    )));
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodo)=>prevTodo.filter((prev)=>prev.id!==id));
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodo)=>prevTodo.map((prev)=>(
      prev.id === id ? {...prev, completed:!prev.completed} : prev
    )));
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className='bg-[#172842] min-h-screen py-8'>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
        <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
        <div className='mb-4'>
          <TodoForm />
        </div>
        <div className='flex flex-wrap gap-y-3'>
          {
            todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
              {/* <h1>wdfcysd</h1> */}
                <TodoItem todo={todo} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
