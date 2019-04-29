import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    withStyles,
} from "@material-ui/core";
import React from "react";
import ReactGA from "react-ga";
import Image from "react-image-webp";
import WhiteIcon from "../WhiteIcon";

function getLastUpdated(lastUpdated: Date): string {
    const timeDiff =
        Math.abs(new Date().getTime() - lastUpdated.getTime()) / 1000;
    if (timeDiff < 3600) {
        const diff = Math.ceil(timeDiff / 60);
        if (diff === 1) {
            return diff + " minute ago";
        } else {
            return diff + " minutes ago";
        }
    } else if (timeDiff < 86400) {
        const diff = Math.ceil(timeDiff / 3600);
        if (diff === 1) {
            return diff + " hour ago";
        } else {
            return diff + " hours ago";
        }
    } else {
        const diff = Math.ceil(timeDiff / (3600 * 24));
        if (diff === 1) {
            return diff + " day ago";
        } else {
            return diff + " days ago";
        }
    }
}

const styles = (theme: any) => ({
    card: {
        height: "100%",
        position: "relative" as "relative",
        [theme.breakpoints.up("md")]: {
            paddingBottom: "100px",
        },
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "130px",
            marginLeft: "8px",
            marginRight: "8px",
        },
    },
    media: {
        height: "auto",
        width: "100%",
        display: "block",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    actions: {
        padding: "0px 4px 4px 0px",
        position: "absolute" as "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(0,0,0,.03)",
        borderTop: "1px solid rgba(0,0,0,.125)",
        display: "block",
    },
    button: {
        textDecoration: "none",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            margin: "1px",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "4px",
            fontSize: "1.2em",
        },
        fontSize: "1em",
    },
    buttonContainer: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    },
    lastUpdated: {
        color: "#777",
        paddingBottom: "4px",
        paddingLeft: "4px",
    },
    icon: {
        fontSize: "1.3em",
        marginRight: "4px",
        marginBottom: "auto",
        marginTop: "auto",
    },
});

function ImgMediaCard(props: { classes: any; data: Project }) {
    const { classes, data } = props;

    const {
        title,
        img,
        description,
        lastUpdated,
        dateCreated,
        githubURL,
        siteURL,
        downloadURL,
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
                <Typography gutterBottom={true} variant="headline" component="h2">
                    {title}
                </Typography>
                <Typography component="p">{description}</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Typography
                    className={classes.lastUpdated}
                    variant="body1"
                    gutterBottom={true}
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
                            to={githubURL}
                        >
                            <Button
                                className={classes.button}
                                variant="contained"
                                size="small"
                                color="secondary"
                            >
                                <WhiteIcon className={classes.icon} icon={["fab", "github"]} />
                                CHECK IT OUT
                            </Button>
                        </ReactGA.OutboundLink>
                    )}
                    {siteURL && (
                        <ReactGA.OutboundLink
                            className={classes.button}
                            eventLabel={title + " Website"}
                            to={siteURL}
                        >
                            <Button
                                className={classes.button}
                                variant="contained"
                                size="small"
                                color="secondary"
                            >
                                <WhiteIcon className={classes.icon} icon={["fab", "chrome"]} />
                                VISIT SITE
                            </Button>
                        </ReactGA.OutboundLink>
                    )}
                    {downloadURL && (
                        <ReactGA.OutboundLink
                            className={classes.button}
                            eventLabel={title + " download"}
                            to={downloadURL}
                        >
                            <Button
                                className={classes.button}
                                variant="contained"
                                size="small"
                                color="secondary"
                            >
                                {data.languages === "Android" ? (
                                    <WhiteIcon
                                        className={classes.icon}
                                        icon={["fab", "android"]}
                                    />
                                ) : data.languages === "Java" ? (
                                    <WhiteIcon className={classes.icon} icon={["fab", "java"]} />
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

export default withStyles(styles)(ImgMediaCard);
