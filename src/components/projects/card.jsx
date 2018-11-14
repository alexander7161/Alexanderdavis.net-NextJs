import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function getLastUpdated(lastUpdated) {
  var timeDiff = Math.abs(new Date().getTime() - lastUpdated.getTime());
  if (timeDiff / 1000 < 3600) {
    var diff = Math.ceil(timeDiff / (1000 * 60));
    if (diff == 1) {
      diff += " minute ago";
    } else {
      diff += " minutes ago";
    }
  } else if (timeDiff / 1000 < 86400) {
    var diff = Math.ceil(timeDiff / (1000 * 3600));
    if (diff == 1) {
      diff += " hour ago";
    } else {
      diff += " hours ago";
    }
  } else {
    var diff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diff == 1) {
      diff += " day ago";
    } else {
      diff += " days ago";
    }
  }
  return diff;
}

const styles = theme => ({
  card: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
      marginRight: "8px"
    },
    position: "relative",
    paddingBottom: "70px"
  },
  media: {
    height: "auto"
  },
  actions: {
    padding: "8px 0px",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,.03)",
    borderTop: "1px solid rgba(0,0,0,.125)",
    display: "block"
  },
  button: {
    textDecoration: "none",
    width: "100%",
    margin: "1px"
  },
  lastUpdated: {
    color: "#777",
    paddingBottom: "4px",
    paddingLeft: "4px"
  }
});

function ImgMediaCard(props) {
  const { classes, data } = props;
  const {
    title,
    img,
    description,
    lastUpdated,
    dateCreated,
    githubURL,
    siteURL,
    downloadURL
  } = props.data;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt={title}
        className={classes.media}
        height="222"
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Typography
          className={classes.lastUpdated}
          variant="body1"
          gutterBottom
        >
          {lastUpdated
            ? "Last Updated " + getLastUpdated(lastUpdated)
            : dateCreated
            ? "Created " + dateCreated
            : ""}
        </Typography>
        <div style={{ display: "flex" }}>
          {githubURL && (
            <Button
              className={classes.button}
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => (window.location.href = data.githubURL)}
            >
              CHECK IT OUT
            </Button>
          )}
          {siteURL && (
            <a className={classes.button} href={data.siteURL}>
              <Button
                className={classes.button}
                variant="contained"
                size="small"
                color="secondary"
                // onClick={() => (window.location.href = data.siteURL)}
              >
                VISIT SITE
              </Button>
            </a>
          )}
          {downloadURL && (
            <Button
              className={classes.button}
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => (window.location.href = data.downloadURL)}
            >
              DOWNLOAD
            </Button>
          )}
        </div>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
