'use client'

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import Carosuelimg1 from '/public/assets/ad1.avif';
import Carosuelimg2 from '/public/assets/ad2.avif';
import Carosuelimg3 from '/public/assets/ad3.avif';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles

const CarouselComponents = () => {
  const Allimages = [Carosuelimg1, Carosuelimg2, Carosuelimg3];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      emulateTouch
      showThumbs={false}
      axis="horizontal"
      showStatus={false}
    >
      {Allimages.map((image, index) => (
        <div key={index} className="relative w-full h-96 md:h-[42rem]">
          <Image
            src={image}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponents;
