import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
  Avatar,
  CardHeader,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RoundedImage from "./Home/RoundedImage";
import image from "C:/Users/lenovo/Desktop/chit-chat/frontend/src/IMG-20180721-WA0005.jpg";

const useStyles = (theme) => ({
  root: {
    maxWidth: "100%",
    height: "500px",
    fontSize: ".7rem",

    border: "1px solid grey",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
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
          <CardHeader
            avatar={
              <Avatar aria-label="User-Image">
                <RoundedImage value={image} />
              </Avatar>
            }
            title={this.props.user}
            subheader={this.props.location}
          />
          <CardMedia className={classes.media} image={this.props.src} />

          <CardActions className="m-0 p-0">
            <IconButton
              aria-label="add to favorites"
              id="icon"
              className={this.state.color ? classes.colorRed : ""}
              onClick={this.handleClick}
            >
              <FavoriteIcon className="p-0 m-0" />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
        <br />
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Post);
