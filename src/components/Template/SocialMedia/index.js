import React from "react"
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    margin: "20px 0px",
  },
  link: {
    margin: "0 5px",
    "& span": {
      marginLeft: "1em",
      color: "gray",
      fontSize: "0.8em",
    },
  },
}))

const SocialMedia = props => {
  const classes = useStyles()
  const { content } = props
  const MediaLink = () =>
    content.map(el => {
      return (
        <Grid
          container
          item
          xs
          alignItems={"center"}
          style={{ cursor: "pointer" }}
        >
          <a href={el.href} target="blank" className={classes.link}>
            <FontAwesomeIcon icon={el.icon} color={"gray"} />
            <span>{el.name}</span>
          </a>
        </Grid>
      )
    })
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      className={classes.root}
    >
      <MediaLink />
    </Grid>
  )
}

SocialMedia.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
}

SocialMedia.defaultProps = {
  content: [
    {
      name: "Hermes",
      href: "https://www.facebook.com/",
      icon: faFacebookSquare,
    },
    {
      name: "@Hermes",
      href: "https://www.instagram.com/rionigroup.co/",
      icon: faInstagramSquare,
    },
    {
      name: "Hermes",
      href: "https://www.google.com/maps",
      icon: faMapMarkerAlt,
    },
  ],
}

export default SocialMedia