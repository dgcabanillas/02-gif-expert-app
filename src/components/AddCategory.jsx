import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddCategory = ( { setCategories } ) => {

    const [index, setIndex] = useState(2);
    const [value, setValue] = useState('');
    const [active, setActive] = useState( 'inactive' )

    const handleInputChange = (e) => setValue( e.target.value );
    const handleSubmit = e => {
        e.preventDefault();
        if( value.trim().length > 2 ) {
            const newCategory = {
                id: index,
                title: value
            }
            setCategories( categories => [ newCategory, ...categories ]);
            setValue('');
            setIndex(index+1);
        }
        setActive('active')
        setTimeout(() => {
            setActive('inactive');
        }, 100)
    }

    return (  
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={handleInputChange}
                className="shadow-in"
                placeholder="Busque sus gifs aquí"
            />
            <button 
                type="submit"
                value="Search"
                className={active}
            > 
                <img src="https://img.icons8.com/android/24/000000/search.png" alt="search"/>
            </button>
        </form> 
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;