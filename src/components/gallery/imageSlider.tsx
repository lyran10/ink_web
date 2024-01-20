import React,{useState} from 'react'
import { galleryImages } from '../../data/data';

export const ImageSlider = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className="bg-[#f5f5f5]">
      <div className="grid grid-cols-2 justify-center items-center md:grid-cols-4 lg:grid-cols-5 duration-500">
        {
          galleryImages.map((image) => {
            let path =  `${image}.jpg`
            return(
              <img className='w-[300px] h-[400px]' src={path} alt="" />
            )
          })
        }
        {/* Add more images as needed */}
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={handleSliderChange}
        className="slider absolute left-0 bottom-0"
      />
    </div>
  );

}
