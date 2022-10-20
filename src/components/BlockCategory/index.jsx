import './styles.scss'
import React from 'react'

const BlockCategory = ({ image, textCategory }) => {
  return (
        <div className="block_container">
            <div className="block_image">
                <img src={image} alt="" />
                <div className="block_box">
                    <p>{textCategory}</p>
                </div>
            </div>
        </div>
  )
}

export default BlockCategory
