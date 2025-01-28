import React from 'react';

const ToDoItem = ({ todo, index, deleteTodo, toggleComplete }) => {
  return (
    <li >
      <p className='todoText'>
      {todo.text}
      </p>
      
      <div className='todoButtons'>
      <button className='complete' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => toggleComplete(index)}>Toggle Complete</button>
      <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
      </div>

    </li>
  );
};

export default ToDoItem;
