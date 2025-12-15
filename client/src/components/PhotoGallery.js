import React, { useState, useEffect, useMemo } from 'react';
// import { Carousel } from 'react-responsive-carousel'; // Якщо не використовується карусель, можна залишити закоментованим або видалити

// *** ПОВНІСТЮ ВИПРАВЛЕНИЙ МАСИВ З 28 ФОТОГРАФІЯМИ ***
// Використовуємо PUBLIC_URL для коректного відображення на GitHub Pages
const ALL_PHOTOS = [
    { id: 1, src: `${process.env.PUBLIC_URL}/images/photo_29.jpg`, },
    { id: 2, src: `${process.env.PUBLIC_URL}/images/photo_27.jpg`, },
    { id: 3, src: `${process.env.PUBLIC_URL}/images/photo_28.jpg`, },
    { id: 4, src: `${process.env.PUBLIC_URL}/images/photo_30.jpg`, },
    { id: 5, src: `${process.env.PUBLIC_URL}/images/photo_22.jpg`, },
    { id: 6, src: `${process.env.PUBLIC_URL}/images/photo_17.jpg`, },
    { id: 7, src: `${process.env.PUBLIC_URL}/images/photo_26.jpg`, },
    { id: 8, src: `${process.env.PUBLIC_URL}/images/photo_25.jpg`, },
    { id: 9, src: `${process.env.PUBLIC_URL}/images/photo_20.jpg`, },
    { id: 10, src: `${process.env.PUBLIC_URL}/images/photo_14.jpg`, },
    { id: 11, src: `${process.env.PUBLIC_URL}/images/photo_16.jpg`, },
    { id: 12, src: `${process.env.PUBLIC_URL}/images/photo_11.jpg`, },
    { id: 13, src: `${process.env.PUBLIC_URL}/images/photo_6.jpg`, },
    { id: 14, src: `${process.env.PUBLIC_URL}/images/photo_4.jpg`, },
    { id: 15, src: `${process.env.PUBLIC_URL}/images/photo_13.jpg`, },
    { id: 16, src: `${process.env.PUBLIC_URL}/images/photo_32.jpg`, },
    { id: 17, src: `${process.env.PUBLIC_URL}/images/photo_9.jpg`, },
    { id: 18, src: `${process.env.PUBLIC_URL}/images/photo_23.jpg`, },
    { id: 19, src: `${process.env.PUBLIC_URL}/images/photo_21.jpg`, },
    { id: 20, src: `${process.env.PUBLIC_URL}/images/photo_12.jpg`, },
    { id: 21, src: `${process.env.PUBLIC_URL}/images/photo_31.jpg`, },
    { id: 22, src: `${process.env.PUBLIC_URL}/images/photo_19.jpg`, },
    { id: 23, src: `${process.env.PUBLIC_URL}/images/photo_18.jpg`, },
    { id: 24, src: `${process.env.PUBLIC_URL}/images/photo_5.jpg`, },
    { id: 25, src: `${process.env.PUBLIC_URL}/images/photo_7.jpg`, },
    { id: 26, src: `${process.env.PUBLIC_URL}/images/photo_10.jpg`, },
    { id: 27, src: `${process.env.PUBLIC_URL}/images/photo_1.jpg`, },
    { id: 28, src: `${process.env.PUBLIC_URL}/images/photo_2.jpg` },
];

// !!! ЗМІНА ТУТ !!! Кількість фото, що відображаються одночасно:
const ITEMS_PER_SLIDE = 5;
// Інтервал зміни
const SLIDE_INTERVAL = 4000; 

const PhotoGallery = () => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStartIndex(prevIndex => (
                (prevIndex + ITEMS_PER_SLIDE) >= ALL_PHOTOS.length 
                ? 0 
                : prevIndex + ITEMS_PER_SLIDE
            ));
        }, SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, [ALL_PHOTOS.length]);

    const currentPhotos = useMemo(() => {
        let photosSlice = ALL_PHOTOS.slice(startIndex, startIndex + ITEMS_PER_SLIDE);
        
        // Логіка для "зациклення" слайдів
        if (photosSlice.length < ITEMS_PER_SLIDE) {
            const remaining = ITEMS_PER_SLIDE - photosSlice.length;
            photosSlice = photosSlice.concat(ALL_PHOTOS.slice(0, remaining));
        }

        return photosSlice;
    }, [startIndex]);

    return (
        <section className="gallery-section">
            <h2>Наші спільні моменти</h2>
            <div className="photo-gallery">
                {currentPhotos.map((photo, index) => (
                    <div 
                        key={photo.id}
                        className="photo-card active"
                        style={{'--transition-delay': `${index * 0.1}s`}} 
                    >
                    <img 
                            src={photo.src} 
                            alt={photo.caption} 
                            loading="lazy" 
                            className="gallery-image" // КЛАС ДЛЯ АДАПТИВНОСТІ
                        />
                        <p className="photo-caption">{photo.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;