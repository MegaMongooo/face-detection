import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt3'>
        <img id='inputimage' alt='' src={imageUrl} width='600px' height='auto' />
      <div style={{top: box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}} className='bounding-box'></div>
      </div>
    </div>
  )
}

export default FaceRecognition;