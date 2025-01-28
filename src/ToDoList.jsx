import React from 'react';
import ToDoItem from './ToDoItem.jsx';

const ToDoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
