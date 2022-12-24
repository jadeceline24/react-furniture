import React from 'react'

const Image = ({src, fallback, type = 'image/webp', alt}) => {
  return (
    <picture>
      <source srcSet={src} type={type}/>
      <img fallback={fallback} alt={alt}/>
    </picture>
  )
}

export default Image