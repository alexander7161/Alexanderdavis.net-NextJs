import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";

import ProjectTile from "./ProjectTile";

const styles = theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

const tileData = [
  {
    img: null,
    title: "ClosingTime",
    description:
      "Tells you when restaurants are offering closing time discounts.",
    language: "React",
    link: "https://alexanderdavis.net/closingtime/",
    featured: true
  },
  {
    img: null,
    title: "Hello",
    author: "Alex"
  },
  {
    img: null,
    title: "Hello",
    author: "Alex"
  },
  {
    img: null,
    title: "Hello",
    author: "Alex",
    featured: true
  },
  {
    img: null,
    title: "Hello",
    author: "Alex"
  },
  {
    img: null,
    title: "Hello",
    author: "Alex"
  },
  {
    img: null,
    title: "Hello",
    author: "Alex"
  },
  {
    img: null,
    title: "Hello",
    author: "Alex"
  }
];
function AdvancedGridList(props) {
  const { classes } = props;

  return (
    <Grid xs={12} md={6} className={classes.root}>
      <GridList cellHeight={"auto"} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <ProjectTile tile={tile} />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvancedGridList);
