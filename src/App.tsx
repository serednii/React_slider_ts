
import Slider from './slider/Slider';
import './App.css';


const  App: React.FC = () => {
  const images = [
    'http://smm.zzz.com.ua/pizza/1.jpg',
    'http://smm.zzz.com.ua/pizza/2.jpg',
    'http://smm.zzz.com.ua/pizza/3.jpg',
    'http://smm.zzz.com.ua/pizza/4.jpg',
    'http://smm.zzz.com.ua/pizza/5.jpg',
    'http://smm.zzz.com.ua/pizza/6.jpg',
    'http://smm.zzz.com.ua/pizza/7.jpg',
    'http://smm.zzz.com.ua/pizza/8.jpg',
  ];



  return (
    <div className='App'>
      <Slider images={images}></Slider>
    </div>
  );
}

export default App;
