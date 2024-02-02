import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState("left")

  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      
    )
  }
console.log(currentIndex)
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)
  }

  

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
      
    },
    exit: {
      x: "-100",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        
      },
    },
  };

  return (
    <div className="carousel">
      <AnimatePresence>
        <motion.img key={currentIndex} src={images[currentIndex]} 
          variants={slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit" 
          />
      </AnimatePresence>
      <div className="slide_direction">
        <div className="left" onClick={handlePrevious}>
          <FaArrowLeft style={{ height: 20, width: 20, backgroundColor: "black", borderRadius:50 }} />
        </div>
        <div className="right" onClick={handleNext}>
          <FaArrowRight style={{ height: 20, width: 20, marginLeft: -20, backgroundColor: "black", borderRadius:50 }} />
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Carousel
