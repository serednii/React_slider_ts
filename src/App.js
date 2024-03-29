import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import ContainerCounter from './componentsCounter/ContainerCounter';
import { incCounter } from "./store/counterSlice";

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      dispatch(incCounter());
      setText('');
    }
  }


  return (
    <div className='App'>
      <ContainerCounter />
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;