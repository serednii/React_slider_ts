import { useDispatch } from 'react-redux';
import { toggleStatus, deleteTodo } from '../store/todoSlice';
import { decCounter } from "../store/counterSlice";


const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handlerRemoveTodo = (id) => {
        dispatch(deleteTodo(id))
        dispatch(decCounter());
    }
    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            />
            <span>{title}</span>
            <span onClick={() => handlerRemoveTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;
