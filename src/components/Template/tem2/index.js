import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import SocialMedia from "../SocialMedia"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  contentWrapper: {
    padding: theme.spacing(5),
  },
  bigTitle: {
    color: "#609595",
    fontWeight: "600",
  },
  title: {
    color: theme.palette.grey[700],
    margin: "1em auto",
  },
  textBody: {
    color: theme.palette.grey[600],
    margin: "1em auto",
  },
  subTitle1: {
    color: theme.palette.grey[600],
    fontWeight: "600",
    display: "block",
    "& span": {
      color: "#609595",
      margin: "auto 1em",
    },
  },
  backgroundCard: {
    position: "relative",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 61%, rgba(247,239,138,1) 68%, rgba(219,184,94,1) 92%, rgba(223,189,105,1) 99%)",
    width: "350px",
    height: "330px",
    borderRadius: theme.borderRadius,
  },
  backBlock: {
    position: "relative",
    zIndex: 200,
    width: "400px",
    height: "330px",
    top: "5%",
    left: "5%",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
}))

const Template = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container item xs={5} justify={"center"}>
        <div className={classes.backgroundCard}>
          <Card className={classes.backBlock}>
            <CardMedia
              className={classes.photo}
              image="/demo.png"
              title="Paella dish"
            />
          </Card>
        </div>
      </Grid>
      <Grid item xs={7} justify="center">
        <div className={classes.contentWrapper}>
          <Typography variant={"h4"} className={classes.bigTitle}>
            Hermes
          </Typography>
          <Typography variant={"subtitle1"} className={classes.title}>
            The Most Unforgettable Showroom in Paris
          </Typography>
          <Typography variant={"body2"} className={classes.textBody}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua “Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.”.”
          </Typography>
          <Typography variant={"overline"} className={classes.subTitle1}>
            Opening:
            <span>Mon - Fri, 10am - 5pm</span>
          </Typography>
          <Typography variant={"overline"} className={classes.subTitle1}>
            Phone:
            <span>+43 9 99999999</span>
          </Typography>
          <SocialMedia />
        </div>
      </Grid>
    </Grid>
  )
}

export default Template
