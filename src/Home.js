import React, { useState, useEffect }  from 'react';
import ImgMediaCard from './components/UI/ImgMediaCard';

const Home = props => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);


    const FavHandler = newItem =>{
        props.onFavClicked(newItem);        
    };

    //Consume web service.
    const urlService="https://api.nasa.gov/planetary/apod?api_key=yWhBenb6jE39gyaSrhQnrJvSWU5v0JgyCicQopW7&count=6&thumbs=true";

    useEffect(() => {
        fetch(urlService)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPhotos(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {photos.map(photo => (
                <ImgMediaCard onFavClicked={FavHandler}
                    title={photo.title}
                    alt={photo.title}
                    img={photo.url}
                    description={photo.explanation}
                    media_type={photo.media_type}
                    date = {photo.date}
                    key={photo.url}
                />
                ))}
            </ul>
        );
    }
}

export default Home;