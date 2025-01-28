import React from 'react';

const Header = ({ inputValue, setInputValue, addTodo }) => {
  return (
    <header>
      <h1 className='title'>To-Do List</h1>
      <div className='taskAdd'>
        <input
        className='input'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="   Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

    </header>
  );
};

export default Header;
