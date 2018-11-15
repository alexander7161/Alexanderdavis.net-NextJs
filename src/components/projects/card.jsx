import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import classNames from "classnames";

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
    [theme.breakpoints.up("md")]: {
      paddingBottom: "75px"
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "130px"
    }
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
    [theme.breakpoints.up("md")]: {
      margin: "1px"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4px",
      fontSize: "1.2em"
    },
    fontSize: "1em"
  },
  buttonContainer: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  lastUpdated: {
    color: "#777",
    paddingBottom: "4px",
    paddingLeft: "4px"
  },
  icon: {
    fontSize: "1.3em",
    marginRight: "4px",
    marginBottom: "auto",
    marginTop: "auto"
  }
});

function ImgMediaCard(props) {
  const { classes, data } = props;
  loadCSS(
    "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
    document.querySelector("#insertion-point-jss")
  );

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
        <div className={classes.buttonContainer}>
          {githubURL && (
            <a className={classes.button} href={data.githubURL}>
              <Button
                className={classes.button}
                variant="contained"
                size="small"
                color="secondary"
              >
                <Icon className={classNames(classes.icon, "fab fa-github")} />
                CHECK IT OUT
              </Button>
            </a>
          )}
          {siteURL && (
            <a className={classes.button} href={data.siteURL}>
              <Button
                className={classes.button}
                variant="contained"
                size="small"
                color="secondary"
              >
                <Icon className={classNames(classes.icon, "fab fa-chrome")} />
                VISIT SITE
              </Button>
            </a>
          )}
          {downloadURL && (
            <a className={classes.button} href={data.downloadURL}>
              <Button
                className={classes.button}
                variant="contained"
                size="small"
                color="secondary"
              >
                {data.languages === "Android" ? (
                  <Icon
                    className={classNames(classes.icon, "fab fa-android")}
                  />
                ) : data.languages === "Java" ? (
                  <Icon className={classNames(classes.icon, "fab fa-java")} />
                ) : (
                  ""
                )}
                DOWNLOAD
              </Button>
            </a>
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
