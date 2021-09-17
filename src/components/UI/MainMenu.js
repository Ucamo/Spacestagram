import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MainMenu = props =>{

let isFavVisible = props.isFavVisible;

const onClickHandler = () =>{
    props.onClickFav();
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FavoriteIcon onClick={onClickHandler} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            {isFavVisible ? <div>Gallery</div> : <div>Favorites</div>}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainMenu;