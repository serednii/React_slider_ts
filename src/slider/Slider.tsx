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
            <button onClick={prevSlide} className="slider-button">Prev</button>
            <img src={images[currentIndex]} alt="slide" className="slider-image" />
            <button onClick={nextSlide} className="slider-button">Next</button>

        </div>
    )
}

export default Slider;

