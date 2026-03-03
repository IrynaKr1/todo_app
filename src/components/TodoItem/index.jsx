import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import styles from './TodoItem.module.scss';

function TodoListItem ({
  status,
  task,
  date,
  onDelete,
  onEdit,
  onToggleStatus,
}) {
  return (
    <div className={styles.listItemContainer}>
      <input
        type='checkbox'
        checked={status}
        name='listItem'
        id='listItem'
        onChange={onToggleStatus}
      />
      <div>{task}</div>
      <div>{date}</div>
      <MdOutlineEdit onClick={onEdit} />
      <MdOutlineDeleteOutline onClick={onDelete} />
    </div>
  );
}

export default TodoListItem;
