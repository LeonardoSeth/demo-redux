// import React from 'react'

import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

  // const {data: todos = [], isLoading} = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const {data: todo , isLoading} = useGetTodoQuery(todoId);

  const handleNextTodo = () => {
    setTodoId(todoId +1);
  }

  const handlePrevTodo = () => {
    if(todoId > 1)
    setTodoId(todoId -1);
  }

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading...{isLoading ? 'true' : 'false'}</h4>
        <h4>isFetching...</h4>

        <pre>{JSON.stringify(todo)}</pre>
        {/* <ul>
          {todos.map(item => (
          <li key={item.id}>
            <strong>{item.completed ? 'Completado' : 'Pendiente'}: </strong>{item.title}
          </li>
          ))}
        </ul> */}
        <button onClick={handlePrevTodo}>Prev todo</button>
        <button onClick={handleNextTodo}>Next todo</button>
    </>
  )
}
