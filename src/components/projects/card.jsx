import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import classNames from "classnames";
import Image from "react-image-webp";

var ReactGA = require("react-ga");

function getLastUpdated(lastUpdated) {
  var timeDiff = Math.abs(new Date().getTime() - lastUpdated.getTime());
  if (timeDiff / 1000 < 3600) {
    var diff = Math.ceil(timeDiff / (1000 * 60));
    if (diff === 1) {
      diff += " minute ago";
    } else {
      diff += " minutes ago";
    }
  } else if (timeDiff / 1000 < 86400) {
    diff = Math.ceil(timeDiff / (1000 * 3600));
    if (diff === 1) {
      diff += " hour ago";
    } else {
      diff += " hours ago";
    }
  } else {
    diff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diff === 1) {
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
    position: "relative",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "100px"
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "130px",
      marginLeft: "8px",
      marginRight: "8px"
    }
  },
  media: {
    height: "auto",
    width: "100%",
    display: "block",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
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
      <Image
        alt={title}
        title={title}
        className={classes.media}
        src={require("./img/" + img + ".png")}
        webp={require("./img/" + img + ".webp")}
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
            <ReactGA.OutboundLink
              className={classes.button}
              eventLabel={title + " github"}
              to={data.githubURL}
            >
              <Button
                className={classes.button}
                variant="contained"
                size="small"
                color="secondary"
              >
                <Icon className={classNames(classes.icon, "fab fa-github")} />
                CHECK IT OUT
              </Button>
            </ReactGA.OutboundLink>
          )}
          {siteURL && (
            <ReactGA.OutboundLink
              className={classes.button}
              eventLabel={title + " Website"}
              to={data.siteURL}
            >
              <Button
                className={classes.button}
                variant="contained"
                size="small"
                color="secondary"
              >
                <Icon className={classNames(classes.icon, "fab fa-chrome")} />
                VISIT SITE
              </Button>
            </ReactGA.OutboundLink>
          )}
          {downloadURL && (
            <ReactGA.OutboundLink
              className={classes.button}
              eventLabel={title + " download"}
              to={data.downloadURL}
            >
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
            </ReactGA.OutboundLink>
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
