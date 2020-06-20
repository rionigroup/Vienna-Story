import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // width: "1000px",
    color: "#609595",
  },
  paper: {
    padding: theme.spacing(2),
  },
  photo: {
    width: "380px",
    height: "350px",
    borderRadius: "0.8em",
    border: "3px solid white",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
}))

const Template = () => {
  const classes = useStyles()
  return (
    // <div className={classes.root}>
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container item xs={5} justify="center">
        <CardMedia
          className={classes.photo}
          image="/demo.png"
          title="Paella dish"
        />
        {/* <Paper className={classes.paper}>Photo</Paper> */}
      </Grid>
      <Grid item xs={7} justify="center">
        <Typography variant={"h4"} style={{ fontWeight: "bold" }}>
          Hermes
        </Typography>
        <Typography variant={"subtitle1"} style={{margin: '1em auto'}}>
          The Most Unforgettable Showroom in Paris
        </Typography>
        <Typography
          variant={"body2"}
          style={{ color: "gray", margin: "1em auto" }}
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua “Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.”.”
        </Typography>
        <Typography variant={"overline"} display={"block"}>
          <span style={{ fontWeight: "bold" }}>Opening: </span> Mon-Fri,
          10am-5pm
        </Typography>
        <Typography variant={"overline"} display={"block"}>
          <span style={{ fontWeight: "bold" }}>Phone: </span> +43 9 99999999
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          style={{ width: "70%" }}
        >
          <Grid
            container
            item
            xs
            alignItems={"center"}
            style={{ cursor: "pointer" }}
          >
            <a
              href="https://www.facebook.com/"
              target="blank"
              style={{ margin: "0 5px" }}
            >
              <FontAwesomeIcon icon={faFacebookSquare} color={"gray"} />
              <span
                style={{ marginLeft: "1em", color: "gray", fontSize: "0.8em" }}
              >
                Hermes
              </span>
            </a>
          </Grid>
          <Grid
            container
            item
            xs
            alignItems={"center"}
            style={{ cursor: "pointer" }}
          >
            <a
              href="https://www.instagram.com/rionigroup.co/"
              target="blank"
              style={{ margin: "0 5px" }}
            >
              <FontAwesomeIcon icon={faInstagramSquare} color={"gray"} />
              <span
                style={{ marginLeft: "1em", color: "gray", fontSize: "0.8em" }}
              >
                @Hermes
              </span>
            </a>
          </Grid>
          <Grid
            container
            item
            xs
            alignItems={"center"}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} color={"gray"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </div>
  )
}

export default Template
