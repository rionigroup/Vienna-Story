/**
 * Template: left is content, right is picture
 */
import React from "react"
import PropTypes from "prop-types"
import parse from "html-react-parser"
import { Grid, Card, Typography, Box } from "@material-ui/core"
import Carousel from "../../../components/Carousel"
import SocialMedia from "../SocialMedia"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "1em auto",
  },
  contentWrapper: {
    padding: `1em 3em 1em 1em`,
    animation: `$slideFadeRight 1.5s`,
    [theme.breakpoints.down("lg")]: {
      padding: `0`,
    },
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
    color: theme.palette.grey[600],
    margin: "1em auto",
    fontSize: "1em",
    textAlign: "justify",
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
    marginTop: "2em",
    border: "3px solid black",
    width: "450px",
    height: "330px",
    animation: `$slideFadeLeft 1.5s`,
    [theme.breakpoints.down("lg")]: {
      background: "none",
      border: "none"
    },
  },
  backBlock: {
    position: "relative",
    border: "3px solid black",
    zIndex: 200,
    width: "450px",
    height: "330px",
    top: "5%",
    left: "-5%",
    [theme.breakpoints.down("lg")]: {
      top: "0px",
      left: "0px",
    },
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  mustDoIcon: {
    width: "60px",
    height: "60px",
  },
  mustDoWrapper: {
    position: "relative",
    left: "-5%",
    marginTop: "3em",
    [theme.breakpoints.down("lg")]: {
      position: "flex",
      flexDirection: "column",
      left: "0px",
      padding: "3em"
    }
  },
  mustDoList: {
    [theme.breakpoints.down("lg")]: {
      margin: "1em"  
    }
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
    mustDo,
    openHours,
    phone,
    socialMedia,
    pic,
    bgColor,
  } = props
  const classes = useStyles()
  const MustDo = ({ title }) => (
    <Grid item lg={12} xl={6}>
      <Box display="flex" width="100%" className={classes.mustDoList}>
        <CardMedia
          className={classes.mustDoIcon}
          image={"/images/tipLight.png"}
          title="Light Bubble"
        />
        <Box display="flex" justifyContent="start" alignItems="center">
          <span style={{ fontSize: "0.8em", padding: "10px" }}>{title}</span>
        </Box>
      </Box>
    </Grid>
  )
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={12} xl={7}>
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
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SocialMedia content={socialMedia} />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} xl={5}>
        <Grid container display="flex" justifyContent="center">
          <Grid item xs>
            <div
              className={classes.backgroundCard}
              style={{ background: bgColor }}
            >
              <Card className={classes.backBlock}>
                <Carousel isCarousel={true} imgList={pic} />
              </Card>
            </div>
          </Grid>
          <Grid item xs>
            <Grid container className={classes.mustDoWrapper}>
              <MustDo title={mustDo[0]} />
              <MustDo title={mustDo[1]} />
            </Grid>
          </Grid>
        </Grid>
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
