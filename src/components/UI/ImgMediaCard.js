import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
    marginRight: '25%',
    marginLeft: '25%',
  },
});

const ImgMediaCard = props => {
  const classes = useStyles();

  const [ isLiked, setIsLiked ] = useState(false);

  let media_type = props.media_type;
  if(media_type === "image"){
    media_type="img";
  }else{
    media_type="iframe";
  }

  const onLikeHandler = () =>{
    if(isLiked){
      setIsLiked(false);
    }else{
      setIsLiked(true); 
    }
    props.onFavClicked(props.date);
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component={media_type}
          alt={props.alt}
          height="25%"
          image={props.img}
          title={props.title}
          src={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography  component="p">
            {props.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites" onClick={onLikeHandler}>
          {isLiked || props.isFav ? <FavoriteIcon style={{ color: 'red' }}   />: <FavoriteBorder color="primary"  />}              
        </IconButton>        
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;