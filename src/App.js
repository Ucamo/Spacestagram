import React, {useState} from 'react';
import './App.css';
import Home from './Home';
import FavImages from './components/Images/FavImages'
import MainMenu from './components/UI/MainMenu';

function App() {
    //Handle favorites in local storage.
    let storedFavorites  = JSON.parse(localStorage.getItem("my_favorites"));
    const [ favorites, setFavorites ] = useState(storedFavorites);

    const FavHandler = newItem =>{
        if(favorites.indexOf(newItem)> -1){
            //Element already exist, delete it
            let filteredArray = favorites.filter(item => item !== newItem);
            setFavorites(filteredArray);
        }else{
            //Add new element to favorites.
            setFavorites([...favorites, newItem]);
        }
        
    };
    //save into local storage
    localStorage.setItem("my_favorites", JSON.stringify(favorites));

    //Handle favorites view.
    const [ isFavoriteVisible, setIsFavoriteVisible ] = useState(false);

    const onClickFavIconHandler = () =>{
      if(isFavoriteVisible){
        setIsFavoriteVisible(false);
      }else{
        setIsFavoriteVisible(true);
      }        
    };

  return (
    <div className="App">
      <MainMenu onClickFav={onClickFavIconHandler} isFavVisible={isFavoriteVisible} />   
      <header className="App-header">
      {isFavoriteVisible ? 
      <div>
        <h2>Your Favorites</h2>
      <FavImages onFavClicked={FavHandler} />
      </div> 
      : 
      <div>
        <h2>Gallery</h2> 
        <Home onFavClicked={FavHandler}/>
        </div>
        }
      </header>       
    </div>
  );
}

export default App;
