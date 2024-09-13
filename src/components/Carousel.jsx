/* eslint-disable react/prop-types */
// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import PropTypes from "prop-types"
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';


export default function Carousel1({ images }) {

  return (
    <div className='carousel'>
      <Carousel >
        {images.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img src={item} alt={item} className="carousel-image" />
            </div>
          
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

  )
}


