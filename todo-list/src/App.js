import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [editTodoItem, setEditTodoItem] = useState(null);
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
