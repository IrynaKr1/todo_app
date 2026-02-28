import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import styles from './TodoItem.module.scss';

function TodoListItem ({ status, task, date }) {
  return (
    <div className={styles.listItemContainer}>
      <input
        type='checkbox'
        checked={status}
        name='listItem'
        id='listItem'
        onChange={() => {}}
      />
      <div>{task}</div>
      <div>{date}</div>
      <MdOutlineEdit />
      <MdOutlineDeleteOutline />
    </div>
  );
}

export default TodoListItem;
