import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({box, imageUrl}) => {
  return(
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id = "inputImage" 
          height="auto"
          width='500px' 
          src={imageUrl} alt='image sent in from input'
        />
        <div
          className='bounding-box'
          style = {
            {
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol
            }
          }
        >
        </div>
      </div>
    </div>
  )
}

export default FaceRecognition;