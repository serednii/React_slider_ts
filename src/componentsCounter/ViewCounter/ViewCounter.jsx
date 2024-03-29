import { useSelector } from 'react-redux';

const ViewCounter = () => {
    const counter = useSelector(state => state.counter.count);

    return (
        <div>
            <span>Counter {counter}</span>
        </div>
    );
};

export default ViewCounter;
