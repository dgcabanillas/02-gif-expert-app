import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState( [{ id: 1, title: 'One Punch' }]);

    return (
        <div className="main-container">
            <header>
                <h1 className="shadow-out"> GifExpertApp </h1>
                <AddCategory setCategories={ setCategories } />
            </header>
            <div className="cards">
                {
                    categories.map( category => (
                        <GifGrid  key={category.id} category={category} />
                    ))
                }
            </div>
        </div>
    );
}

export default GifExpertApp;