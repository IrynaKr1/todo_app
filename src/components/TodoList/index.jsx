import React, { useState } from 'react';
import { mockTodos } from './../../test/mockData.js';
import TodoListItem from '../TodoItem/index.jsx';
import styles from './TodoList.module.scss';

function TodoList () {
  const [todos, setTodos] = useState(mockTodos);

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

//   const handleEdit = (id, updatedTask) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, task: updatedTask } : todo
//       )
//     );
//   };

  const handleToggleStatus = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <ul className={styles.listContainer}>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoListItem
            status={todo.status}
            task={todo.task}
            date={todo.date}
            onDelete={() => handleDelete(todo.id)}
           // onEdit={updatedTask => handleEdit(todo.id, updatedTask)}
            onToggleStatus={() => handleToggleStatus(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
