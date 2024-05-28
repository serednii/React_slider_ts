
import ScrollComponent from './scrollComponent/ScrollComponent';
import './App.css';
import AddScrollComponent from './components/addScrollComponent/AddScrollComponent';


const  App: React.FC = () => {


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
