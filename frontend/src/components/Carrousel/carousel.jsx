import { useState } from 'react';
import './carousel.css';


export function Carousel({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((index) =>
            index === images.length - 1 ? 0 : index + 1

        );

    };

    const prevImage = () => {
        setCurrentIndex((index) =>
            index === 0 ? images.length - 1 : index - 1
        );

    };

    return (

        <div className="carousel">
            {images.length > 1 && <div className='fa-solid fa-chevron-left' onClick={prevImage}> </div>}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            {images.length > 1 && <div className='fa-solid fa-chevron-right' onClick={nextImage}> </div>}
            {images.length > 1 && <p className='carousel-counter'>{currentIndex + 1}/{images.length}</p>}
        </div>
    )
}

export default Carousel
