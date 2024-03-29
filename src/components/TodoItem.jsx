import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../store/todoSlice';
import { decCounter } from "../store/counterSlice";


const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    const handlerRemoveTodo = (id) => {
        dispatch(removeTodo({ id }))
        dispatch(decCounter());
    }
    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleComplete({ id }))}
            />
            <span>{text}</span>
            <span onClick={() => handlerRemoveTodo(id)}>&times;</span>
        </li>
    );
};

export default TodoItem;
