import React from "react";

const TodoList = ({todoItems, setTodoItems}) => {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <li className="list-item" key={todoItem.id}>
          <input type="text" 
          value={todoItem.title} 
          className="list" 
          onChange={(event) => event.preventDefault()}
          />

        </li>
      )

      )}
    </div>
  );
};

export default TodoList;
