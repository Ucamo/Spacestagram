import React from 'react';
import Favorite from './Favorite';

const FavImages = props =>{
    //Get favorite images from local storage
    let storedFavorites  = JSON.parse(localStorage.getItem("my_favorites")) || [];

    const FavHandler = newItem =>{
        props.onFavClicked(newItem);        
    };

    return (
        <ul>
            {storedFavorites.map(favDate => (
            <Favorite date={favDate} key={favDate} onFavClicked={FavHandler} />
            ))}
        </ul>
    );
};

export default FavImages;