import React, { useState } from 'react';
import { mockTodos } from './../../test/mockData.js';
import TodoListItem from '../TodoItem/index.jsx';
import styles from './TodoList.module.scss';
import TodoForm from '../TodoForm/index.jsx';

function TodoList () {
  const [todos, setTodos] = useState(mockTodos);

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAdd = newTodo => {
    setTodos([...todos, { ...newTodo, id: Date.now(), status: false }]);
    console.log('newTodo', newTodo);
  };

  const handleEdit = (id, updatedTask) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, ...updatedTask } : todo))
    );
  };

  const handleToggleStatus = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <>
      <TodoForm
        initialValues={{
          task: '',
          date: new Date().toISOString().split('T')[0],
        }}
        onSubmit={handleAdd}
      />
      <ul className={styles.listContainer}>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoListItem
              status={todo.status}
              task={todo.task}
              date={todo.date}
              onDelete={() => handleDelete(todo.id)}
              onEdit={updatedTask => handleEdit(todo.id, updatedTask)}
              onToggleStatus={() => handleToggleStatus(todo.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
