import React from "react";

const TodoList = ({ todoItems, setTodoItems, setEditTodoItem}) => {

  const handleComplete = (todoItem) => {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({id}) => {
    const findTodoItem = todoItems.find((todoItem) => todoItem.id === id);
    setEditTodoItem(findTodoItem);
  };

  const handleDelete = ({ id }) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id))
  };

  return (
    <div>
      {todoItems.map((todoItem) => (
        <li className="list-item" key={todoItem.id}>
          <input type="text"
            value={todoItem.title}
            className={`list ${todoItem.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todoItem)}>
              <i className="fa fa-check-square-o"></i>
            </button>
          </div>
          <div>
            <button className="button-edit task-button" onClick={() => handleEdit(todoItem)}>
              <i className="fa fa-edit"></i>
            </button>
          </div>
          <div>
            <button className="button-delete task-button" onClick={() => handleDelete(todoItem)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>

        </li>
      )

      )}
    </div>
  );
};

export default TodoList;
