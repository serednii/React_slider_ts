import { useDispatch } from 'react-redux';
import { incCounter, decCounter, resetCounter } from '../../store/counterSlice';

const ButtonCounter = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(incCounter())}>+</button>
            <button onClick={() => dispatch(decCounter())}>-</button>
            <button onClick={() => dispatch(resetCounter())}>reset</button>
        </div>
    );
};

export default ButtonCounter;
