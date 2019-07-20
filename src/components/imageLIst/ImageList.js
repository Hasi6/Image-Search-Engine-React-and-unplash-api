import React from 'react';

// import css
import './ImageList.css';

// created components
import ImageCard from '../imageCard/ImageCard';

const ImageList = (props) => {

    const searchImage = props.images.map((image) => {
        return (<ImageCard key={image.id} image={image}/>)
    });

    return(
        <div className="image-list">
            {searchImage}
        </div>
    );
}

export default ImageList;