import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import SocialMedia from "../SocialMedia"
// import pink from "@material-ui/core/colors/pink"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  contentWrapper: {
    padding: theme.spacing(5),
    animation: `$slideFadeRight 1.5s`,
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
    fontSize: "1.1em",
  },
  subTitle1: {
    color: theme.palette.grey[600],
    fontSize: "0.9em",
    fontWeight: "600",
    display: "block",
    "& span": {
      color: "#609595",
      margin: "auto 0.8em",
    },
  },
  backgroundCard: {
    position: "relative",
    background: "#609595",
    // "radial-gradient(circle, rgba(255,255,255,1) 61%, rgba(247,239,138,1) 68%, rgba(219,184,94,1) 92%, rgba(223,189,105,1) 99%)",
    width: "350px",
    height: "330px",
    borderRadius: theme.borderRadius,
    animation: `$slideFadeLeft 1.5s`,
  },
  backBlock: {
    position: "relative",
    zIndex: 200,
    width: "400px",
    height: "330px",
    top: "5%",
    left: "-20%",
    [theme.breakpoints.down("md")]: {
      top: "0px",
      left: "0px",
      width: "100%",
    },
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  "@keyframes slideFadeRight": {
    "0%": {
      opacity: "0",
      transform: "translateX(-120px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateX(0px)",
    },
  },
  "@keyframes slideFadeLeft": {
    "0%": {
      opacity: "0",
      transform: "translateX(120px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateX(0px)",
    },
  },
}))

const Template = props => {
  const { type, name, title, intro, openHours, phone, socialMedia, pic } = props
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
      <Grid item xs={12} md={12} lg={7} justify="center">
        <div className={classes.contentWrapper}>
          <Typography variant={"h5"} className={classes.bigTitle}>
            {name}
          </Typography>
          <Typography variant={"h6"} className={classes.title}>
            {title}
          </Typography>
          <Typography variant={"body2"} className={classes.textBody}>
            {intro}
          </Typography>
          <Typography variant={"overline"} className={classes.subTitle1}>
            Opening:
            <span>{openHours}</span>
          </Typography>
          <Typography variant={"overline"} className={classes.subTitle1}>
            Phone:
            <span>{phone}</span>
          </Typography>
          <SocialMedia content={socialMedia} />
        </div>
      </Grid>
      <Grid container item xs={12} md={12} lg={5} justify={"center"}>
        <div className={classes.backgroundCard}>
          <Card className={classes.backBlock}>
            <CardMedia
              className={classes.photo}
              image={pic}
              title="Paella dish"
            />
          </Card>
        </div>
      </Grid>
    </Grid>
  )
}

Template.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  openHours: PropTypes.string,
  phone: PropTypes.string,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.number,
    })
  ),
  pic: PropTypes.string,
}

Template.defaultProps = {
  type: "attraction",
  name: "Hermes",
  title: "The Most Unforgettable Showroom in Paris",
  intro: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua “Lorem
  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.”.”`,
  openHours: `Mon - Fri, 10am - 5pm`,
  phone: `+43 9 99999999`,
  socialMedia: [
    {
      name: "Schloß Schönbrunn",
      href: "https://www.facebook.com/schloss.schoenbrunn/",
      icon: 0,
    },
    {
      name: "@schoenbrunnpalace",
      href: "https://www.instagram.com/schoenbrunnpalace/",
      icon: 1,
    },
  ],
  pic: "/image/noPic.png",
}

export default Template
