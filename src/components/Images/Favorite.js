import React, {useState, useEffect} from 'react';
import ImgMediaCard from '../UI/ImgMediaCard';

const Favorite = props =>{
    const date = props.date;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState([]);

    const FavHandler = newItem =>{
        props.onFavClicked(newItem);        
    };


    //Consume web service.
    const urlService="https://api.nasa.gov/planetary/apod?api_key=yWhBenb6jE39gyaSrhQnrJvSWU5v0JgyCicQopW7&date="+date;

    useEffect(() => {
        fetch(urlService)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setResult(data);
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
                {
                <ImgMediaCard onFavClicked={FavHandler}
                    title={result.title}
                    alt={result.title}
                    img={result.url}
                    description={result.explanation}
                    media_type={result.media_type}
                    date = {result.date}
                    key={result.url}
                    isFav={true}
                />
                }
            </ul>
        );
    }
};

export default Favorite;