import React from 'react';

const GifGridItem = ({ image }) => {

    const { title, url } = image;

    return (  
        <div className="card animate__animated animate__fadeIn shadow-out"> 
            <img src={ url } alt={ title } />
        </div>
    );
}
 
export default GifGridItem;