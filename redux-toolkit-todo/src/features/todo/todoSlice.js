import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTodo: (state, action)=>{
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo);
      console.log(state.todos)
    },
    removeTodo: (state,action)=>{
      state.todos = state.todos.filter((todo)=> todo.id!==action.payload);
    },
    updateTodo: (state,action)=>{
      console.log(state.todos)
      state.todos = state.todos.map((todo)=>{
        if(todo.id === action.payload.id){
          return {
            ...todo,
            text: action.payload.text
          }
        }
        return todo;
      });
    }
  }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer