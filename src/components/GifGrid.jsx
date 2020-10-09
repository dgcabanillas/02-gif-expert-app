import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images , loading } =  useFetchGifs( category.title );
    return (  
        <div className="category-container shadow-in"> 
            <h2 className="shadow-out"> { category.title } </h2>
            <div className="card-grid">   
                { loading ? 
                    <p> Loading </p>
                    :
                    images.map( image => 
                        <GifGridItem 
                            key={ image.id } 
                            image={image}
                        />
                    )
                }
            </div>
        </div>
    );
}
 
export default GifGrid;