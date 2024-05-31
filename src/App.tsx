
import ScrollComponent from './scrollComponent/ScrollComponent';
import './App.css';
import AddScrollComponent from './components/addScrollComponent/AddScrollComponent';
import { useEffect } from 'react';
import { RootState } from './store';
import { fetchScrollBar } from './store/scrollSlice';
import { useAppDispatch, useAppSelector } from './store/index'; // 
const  App: React.FC = () => {
console.log('APP')
const dispatch = useAppDispatch();

useEffect(()=>{
dispatch(fetchScrollBar())
console.log('fetch useEffect')
}, [dispatch])

  return (
    <div className='App p-5'>
      <div className='m-auto w-4/5'>  
      <AddScrollComponent/>
      <ScrollComponent/>
      </div>
    </div>
  );
}

export default App;
