import React, {useState} from 'react';
import './Slider.css'


interface SliderProp {
    images: string[];
}

const Slider: React.FC<SliderProp> = ({images})=>{
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = ()=>{
        const isFirstSlide  = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length-1: currentIndex-1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return(
        <div className="slider">
            <button onClick={prevSlide} className="slider-button text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Prev</button>
            <img src={images[currentIndex]} alt="slide" className="slider-image" />
            <button onClick={nextSlide} className="slider-button text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Next</button>

        </div>
    )
}

export default Slider;

