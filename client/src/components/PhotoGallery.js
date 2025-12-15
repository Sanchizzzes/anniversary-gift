import React, { useState, useEffect, useMemo } from 'react';

// *** ЗАМІНІТЬ ЦЕЙ МАСИВ НА ВАШІ РЕАЛЬНІ ШЛЯХИ ***
// Я використовую тут коректні веб-шляхи, які мають працювати.
const ALL_PHOTOS = [
  { id: 1, src: '/images/photo_29.jpg', },
  { id: 2, src: '/images/photo_27.jpg', },
  { id: 3, src: '/images/photo_28.jpg', },
  { id: 4, src: '/images/photo_30.jpg', },
  { id: 5, src: '/images/photo_22.jpg', },
  { id: 6, src: '/images/photo_17.jpg', },
  { id: 7, src: '/images/photo_26.jpg', },
  { id: 8, src: '/images/photo_25.jpg', },
  { id: 9, src: '/images/photo_20.jpg', },
  { id: 10, src: '/images/photo_14.jpg', },
  { id: 11, src: '/images/photo_16.jpg', },
  { id: 12, src: '/images/photo_11.jpg', },
  { id: 13, src: '/images/photo_6.jpg', },
  { id: 14, src: '/images/photo_4.jpg', },
  { id: 15, src: '/images/photo_13.jpg', },
  { id: 16, src: '/images/photo_32.jpg', },
  { id: 17, src: '/images/photo_9.jpg', },
  { id: 18, src: '/images/photo_23.jpg', },
  { id: 19, src: '/images/photo_21.jpg', },
  { id: 20, src: '/images/photo_12.jpg', },
  { id: 21, src: '/images/photo_31.jpg', },
  { id: 22, src: '/images/photo_19.jpg', },
  { id: 23, src: '/images/photo_18.jpg', },
  { id: 24, src: '/images/photo_5.jpg', },
  { id: 25, src: '/images/photo_7.jpg', },
  { id: 26, src: '/images/photo_10.jpg', },
  { id: 27, src: '/images/photo_1.jpg', },
  { id: 28, src: '/images/photo_2.jpg', },
];

// !!! ЗМІНА ТУТ !!! Кількість фото, що відображаються одночасно:
const ITEMS_PER_SLIDE = 5; 
// Інтервал зміни (3000 мс = 3 секунди)
const SLIDE_INTERVAL = 4000; 

const PhotoGallery = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex(prevIndex => 
        (prevIndex + ITEMS_PER_SLIDE >= ALL_PHOTOS.length) 
          ? 0 
          : prevIndex + ITEMS_PER_SLIDE
      );
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [ALL_PHOTOS.length]);

  const currentPhotos = useMemo(() => {
    let photosSlice = ALL_PHOTOS.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

    if (photosSlice.length < ITEMS_PER_SLIDE) {
      const remaining = ITEMS_PER_SLIDE - photosSlice.length;
      photosSlice = photosSlice.concat(ALL_PHOTOS.slice(0, remaining));
    }

    return photosSlice;
  }, [startIndex]);

  return (
    <section className="gallery-section">
      <h2>📸 Наші спільні моменти</h2>
      <div className="photo-gallery">
        {currentPhotos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="photo-card active"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              loading="lazy" 
            />
            <p className="photo-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;