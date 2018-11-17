import React from "react";
import "./selections.css"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import friends from "../friends.json";

// state ={
//     friends
//   }
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function selections(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
      {this.state.friends.map(friend => (
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
    ))}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

selections.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(selections);

// export default selections;
