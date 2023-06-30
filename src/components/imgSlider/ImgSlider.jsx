import "./ImgSlider.css";
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import { useRef, useEffect, useState } from "react";

const Slider = ({ images, onSelect }) => {

  const [mouseInside, setMouseInside] = useState(false);
    const imgContainerRef = useRef();
    const handleMouseWheel = (e) => {
      if(mouseInside){
        e.preventDefault()
        imgContainerRef.current.scrollLeft -= e.deltaY
        // imgContainerRef.current.scrollLeft =  imgContainerRef.current.scrollLeft - e.deltaY
      }
    }

    useEffect(() => {
      window.addEventListener("wheel", handleMouseWheel, {passive: false});
      return () => window.removeEventListener("wheel", handleMouseWheel);
    }, [mouseInside])

    const handleScroll = (direction) => {
        if(direction === 'left') {
            imgContainerRef.current.scrollLeft -= 200;
        }
        else if(direction === 'right') {
            imgContainerRef.current.scrollLeft += 200;
        }
    }

  return (
    <div className="slider-wrapper">
      <button className="slider-nav-button" onClick={() => handleScroll('left')}><MdArrowBackIos/></button>
      <div className="slider-images-container" 
      ref={imgContainerRef} 
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={() => setMouseInside(false)}
      >
        {images.map((image, index, arr) => {
          return <img key={image.path + index} src={image.path} className="slider-image" alt={image.title} onClick={() => onSelect(image.path)}/>;
        })}
      </div>
      <button className="slider-nav-button" style={{right: 0}} onClick={() => handleScroll('right')}><MdArrowForwardIos/></button>
    </div>
  );
};


export default Slider;