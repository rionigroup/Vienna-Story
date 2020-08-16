import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(90deg, 	#c0b6a2 0%, #ddd6c9 100%) no-repeat 50% 50% / 100% 100%",
    zIndex: "10",
    [theme.breakpoints.up("lg")]: {
      overflow: "hidden"
    },
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
      display: "block"
    },
  }
}))

const Home = ({ children, fixHeight }) => {
  const classes = useStyles()
  return (
    <div
      className={classes.root}
      style={fixHeight ? {} : { height: "auto" }}
    >
      {children}
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
  fixHeight: PropTypes.bool
}

Home.defaultProps = {
  children: <div />,
  fixHeight: true
}

export default Home
