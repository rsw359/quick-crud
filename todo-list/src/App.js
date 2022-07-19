import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todoItems")) || [];
  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState(initialState);
  const [editTodoItem, setEditTodoItem] = useState(null);
  
 useEffect(() => {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
 }, [todoItems]);
  
  return ( 
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>

        <div>
          <Form
          input={input}
          setInput={setInput}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          editTodoItem={editTodoItem}
          setEditTodoItem={setEditTodoItem}
          />
        </div>

        <div>
          <TodoList todoItems={todoItems} setTodoItems={setTodoItems} setEditTodoItem={setEditTodoItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
