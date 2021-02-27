import React from 'react';
import {
  GalleryWrapper
} from './GalleryContainerElements.js'
import Gallery from "react-photo-gallery";
import {photos} from './photos.js'

const GalleryContainer = () => {
  return (
    <div>
      <GalleryWrapper>
        <Gallery
          photos={photos}
          margin={5}
        />
      </GalleryWrapper>
    </div>
  )
}

export default GalleryContainer