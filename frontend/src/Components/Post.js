import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import img from "../chatting.jpg";

const useStyles = (theme) => ({
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
});

class Post extends Component {
  state = {
    color: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      color: this.state.color === true ? false : true,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={img} title="Demo" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="add to favorites"
              id="icon"
              className={this.state.color ? classes.colorRed : ""}
              onClick={this.handleClick}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Post);
