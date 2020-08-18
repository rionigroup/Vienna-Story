/**
 * Template: left is content, right is picture
 */
import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import {
  Grid,
  Card,
  Typography
} from "@material-ui/core"
import Carousel from "../../../components/Carousel"
import SocialMedia from "../SocialMedia"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  contentWrapper: {
    padding: `1em 6em`,
    animation: `$slideFadeRight 1.5s`,
  },
  bigTitle: {
    color: "#609595",
    fontWeight: "600",
  },
  title: {
    color: theme.palette.grey[800],
    fonWeight: "600",
    margin: "1em auto",
  },
  textBody: {
    color: theme.palette.grey[500],
    margin: "1em auto",
    fontSize: "1em",
    "& p": {
      margin: 0,
    },
  },
  subTitle1: {
    color: theme.palette.grey[500],
    fontSize: "0.8em",
    fontWeight: "600",
    display: "block",
    "& span": {
      color: "#609595",
      margin: "auto 0.8em",
    },
  },
  backgroundCard: {
    position: "relative",
    border: "3px solid black",
    width: "350px",
    height: "330px",
    // #827255
    // borderRadius: theme.borderRadius,
    animation: `$slideFadeLeft 1.5s`,
  },
  backBlock: {
    position: "relative",
    border: "3px solid black",
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

const Template1 = props => {
  const {
    name,
    title,
    intro,
    website,
    openHours,
    phone,
    socialMedia,
    pic,
    bgColor,
  } = props
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
      <Grid item xs={12} md={12} lg={8}>
        <div className={classes.contentWrapper}>
          <Typography variant={"h6"} className={classes.bigTitle}>
            {name}
          </Typography>
          <Typography variant={"subtitle1"} className={classes.title}>
            {title}
          </Typography>
          <Typography variant={"body1"} className={classes.textBody}>
            {parse(intro)}
          </Typography>
          {/* <Typography variant={"overline"} className={classes.subTitle1}>
            Official Website:
            <a href={website.link} target="blank">
              <span>{website.name}</span>
            </a>
          </Typography> */}
          <Grid container>
            <Grid item xs={8}>
              <Typography variant={"overline"} className={classes.subTitle1}>
                Opening:
                <span>{openHours}</span>
              </Typography>
              <Typography variant={"overline"} className={classes.subTitle1}>
                Phone:
                <span>{phone}</span>
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SocialMedia content={socialMedia} />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={12}
        lg={4}
        justify="center"
        direction="column"
      >
        <div className={classes.backgroundCard} style={{ background: bgColor }}>
          <Card className={classes.backBlock}>
            <Carousel isCarousel={true} imgList={pic} />
          </Card>
        </div>
      </Grid>
    </Grid>
  )
}

Template1.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  website: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
  openHours: PropTypes.string,
  phone: PropTypes.string,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      // name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.number,
    })
  ),
  pic: PropTypes.arrayOf(PropTypes.string),
  bgColor: PropTypes.string,
}

Template1.defaultProps = {
  type: "attraction",
  name: "Hermes",
  title: "The Most Unforgettable Showroom in Paris",
  intro: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua “Lorem
  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua.”.”`,
  website: {
    name: "www.google.com",
    link: "https://www.google.com",
  },
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
  pic: ["/image/noPic.png"],
  bgColor: "#ffffff",
}

export default Template1
