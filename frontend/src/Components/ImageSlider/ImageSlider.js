import  { useState } from 'react';
import { SliderData } from './SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        console.log("Next Slide")
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='relative flex justify-center align-center'>
            {/*<FontAwesomeIcon icon="fa-solid fa-arrow-right" onClick={nextSlide} />*/}
            <FontAwesomeIcon className="absolute top-[50%] text-[50px] right-[150px] text-amber-700" onClick={prevSlide} icon={faAngleRight}/>
            <FontAwesomeIcon className="absolute top-[50%] text-[40px] left-[150px] ml-[8px] text-red-700" onClick={nextSlide} icon={faAngleLeft}/>
            {/*<FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />*/}
            {/*<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />*/}
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'opacity-1 transition duration-1000 scale-110' : 'opacity-0 transition duration-1000 ease'}
                        key={index}
                    >
                        {index === current && (
                            <img className="object-fill  w-[1000px] h-[600px] border-radius-1" src={slide.image} alt='travel image'  />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;
