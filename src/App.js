import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { addNewTodo, fetchTodos } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import ContainerCounter from './componentsCounter/ContainerCounter';
import { incCounter } from "./store/counterSlice";

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.todos)

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      dispatch(incCounter());
      setText('');
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className='App'>
      <ContainerCounter />
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occurred: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;