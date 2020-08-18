import React from "react"
import PropTypes from "prop-types"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
  faChrome
} from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    // width: "70%",
    margin: "10px 0px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "1em auto"
    },
  },
  link: {
    cursor: "pointer",
    marginRight: theme.spacing(3),
    "& span": {
      marginLeft: "1em",
      color: "gray",
      fontSize: "0.9em",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
}))

const SocialMedia = props => {
  const classes = useStyles()
  const { content } = props
  const MediaLink = () =>
    content.map((el,i) => {
      return (
        // <Grid
        //   container
        //   item
        //   xs={col}
        //   alignItems={"center"}
        // >

        <a href={el.href} target="blank" className={classes.link} key={`${el}+${i}`}>
          <FontAwesomeIcon
            size="lg"
            icon={
              el.icon === 0
                ? faFacebookSquare
                : el.icon === 1
                ? faInstagramSquare
                : el.icon === 2
                ? faMapMarkerAlt
                : faChrome
            }
            color={"gray"}
          />
          {/* <span>{el.name}</span> */}
        </a>
        // </Grid>
      )
    })
  return (
    // <Grid
    //   container
    //   direction="row"
    //   justify="flex-start"
    //   className={classes.root}
    //   spacing={1}
    // >
    <Box
      mt={3}
      display={"flex"}
      justifyContent={"flex-start"}
      className={classes.root}
    >
      <MediaLink />
    </Box>
    // </Grid>
  )
}

SocialMedia.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.number,
    })
  ),
}

SocialMedia.defaultProps = {
  content: [
    {
      name: "Hermes",
      href: "https://www.facebook.com/",
      icon: 0,
    },
    {
      name: "@Hermes",
      href: "https://www.instagram.com/rionigroup.co/",
      icon: 1,
    },
    {
      name: "Hermes",
      href: "https://www.google.com/maps",
      icon: 2,
    },
  ],
}

export default SocialMedia
