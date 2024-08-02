import React, { useState } from 'react';


const MyCarousel: React.FC = () => {
  const [autoplay, setAutoplay] = useState(true);

  const options = {
    items: 4,
    loop: true,
    margin: 10,
    autoplay,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div>
      
    </div>
  );
};

export default MyCarousel;
