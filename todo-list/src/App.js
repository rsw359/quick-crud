import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const [input, setInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);
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
          />
        </div>

        <div>
          <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
