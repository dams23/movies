import React from 'react'

export const ModalTrailer = ({title,videoUrl}) => {
  const url = `https://www.youtube.com/embed/${videoUrl}`;
  return (
    <div className='trailer'>
      <iframe 
        src={url}
        width='853'
        height='480'
        allowFullScreen
        title={title}
        allow='acelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      />
    </div>
  )
}
ModalTrailer.propTypes = {
  title: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};