import React, { useState} from 'react';
import TodoItem from './TodoList';

const TodoList = ({ todos, toggleTodo, deleteTodo}) => {
    return (
        <ul className="list">  
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            < TodoItem 
            {...todo} 
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
}

export default TodoList;