import React, { useEffect, useState } from "react";

import clear from '../assests/image/clear.jpg';
import cloud from '../assests/image/cloud.jpg';
import partlycloudy from '../assests/image/partly cloudy.jpg';
import rain from '../assests/image/rain.jpg';
import sun from '../assests/image/sun.jpg';


const BackgroundDisplay = ({selectedCity}) => {
const [image, setImage] = useState('cloud');
  

useEffect(() => {
    if (selectedCity && selectedCity.current) {
      const description = selectedCity.current.description.toLowerCase();
      if (description.includes('cloud')) {
        setImage(cloud);
      } else if (description.includes('rain')) {
        setImage(rain);
      } else if (description.includes('sun')) {
        setImage(sun);
      } else if (description.includes('clear')) {
        setImage(clear);
      } else if (description.includes('partly cloudy')) {
        setImage(partlycloudy);
      }
    
    }
  }, [selectedCity]);

  
    return (
        
      <img src={image} alt="cities_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
      
      )
  }
  
  export default BackgroundDisplay;