const React = require("react")
const PropTypes = require("prop-types")
const { makeStyles } = require("@material-ui/core")

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
}))

const BigTitle = ({ text }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <span className={classes.text}>{text}</span>
      </div>
    </div>
  )
}

BigTitle.propTypes = {
  text: PropTypes.string,
}

BigTitle.defaultProps = {
  text: "Vienna",
}

export default BigTitle
