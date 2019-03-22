import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./card";
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    overflowY: "scroll",
    height: "calc(100vh - 56px - 75px)",
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      height: "calc(100vh - 48px - 75px)", 
    }, 
    [theme.breakpoints.up('sm')]: { 
      height: "calc(100vh - 64px - 75px)", 
    } 
  },
  root: {
    paddingTop: "16px",
    paddingBottom: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  root2: {
    flexGrow: 1
  }
});

class FullWidthGrid extends React.Component {
  render() {
    const { classes, tileData } = this.props;
    return (
      <div className={classes.container}>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={10} lg={8}>
          <div className={classes.root2}>
            <Grid container spacing={16}>
              {tileData.map((t, i) => (
                <Grid key={i} item md={4} sm={6} xs={12}>
                  <Card data={t} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      </div>
    );
  }
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { tileData: state.data };
}

export default connect(mapStateToProps)(withStyles(styles)(FullWidthGrid));
