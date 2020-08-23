import React from "react"
import PropTypes from "prop-types"
import CardMedia from "@material-ui/core/CardMedia"
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    width: "50%",
    background: "#609595",
    padding: "0.5em",
  },
  text: {
    width: "100%",
    border: "2px solid white",
    color: "white",
    fontSize: "2em",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
  },
  media: {
    width: "200px",
    height: "63px",
    margin: "auto 10px",
    // [theme.breakpoints.down("xs")]: {
    //   width: "60%",
    //   height: "22px",
    // },
  },
}))

const BigImgTitle = ({ imgUrl }) => {
  const classes = useStyles()
  return (
    <Box width="100%" display="flex" justifyContent="center" mt={2} mb={2}>
      <CardMedia image={imgUrl} className={classes.media} />
    </Box>
  )
}

BigImgTitle.propTypes = {
  text: PropTypes.string,
  imgUrl: PropTypes.string
}

BigImgTitle.defaultProps = {
  text: "Vienna",
  imgUrl: "/images/title/attraction.png"
}

export default BigImgTitle
