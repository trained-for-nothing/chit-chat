import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, grey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import img from "../chatting.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "12%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  colorRed: {
    color: red[500],
  },
}));

var color = false;

export default function RecipeReviewCard() {
  const { root, media, colorRed } = useStyles();

  return (
    <Card className={root}>
      <CardMedia className={media} image={img} title="Demo" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          id="icon"
          className={color ? colorRed : grey[500]}
          onClick={(e) => (color = !color)}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
