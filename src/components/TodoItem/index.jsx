import { useState } from 'react';
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import styles from './TodoItem.module.scss';
import TodoForm from '../TodoForm';

function TodoListItem ({
  status,
  task,
  date,
  onDelete,
  onEdit,
  onToggleStatus,
}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className={styles.listItemContainer}>
      <input
        type='checkbox'
        checked={status}
        name='listItem'
        id='listItem'
        onChange={onToggleStatus}
      />
      {isEditing ? (
        <TodoForm
          initialValues={{ task, date }}
          onSubmit={values => {
            onEdit(values);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <div>{task}</div>
          <div>{date}</div>
        </>
      )}
      <div>{task}</div>
      <div>{date}</div>
      <MdOutlineEdit onClick={() => setIsEditing(true)} />
      <MdOutlineDeleteOutline onClick={onDelete} />
    </div>
  );
}

export default TodoListItem;
