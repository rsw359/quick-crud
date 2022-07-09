import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todoItems, setTodoItems, editTodoItem, setEditTodoItem }) => {
  const updateTodoItem = (title, id, completed) => {
    const newTodoItem = todoItems.map((todoItem) => 
      todoItem.id === id ? { title, id, completed } : todoItem
    );
    setTodoItems(newTodoItem);
    setEditTodoItem("");
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodoItem) {
      setTodoItems([...todoItems, { id: uuidv4(), title: input, completed: false }]);// sets the id, title to user input, and completed to false
      setInput("");
    } else {
      updateTodoItem(input, editTodoItem.id, editTodoItem.completed)
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Create a new Task"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type='submit'>Add</button>
    </form>
  );
};

export default Form;
