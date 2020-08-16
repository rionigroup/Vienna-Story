import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    zIndex: 999,
    margin: "0 auto",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    bottom: "0.5em",
    [theme.breakpoints.down(700)]: {
      display: "none",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    margin: "auto 1.2em",
    // padding: "1em auto",
    "& span": {
      color: theme.palette.grey[800],
      cursor: "pointer",
      fontSize: "0.9em"
    }
  },
}))

const Footer = ({children}) => {
  const classes = useStyles()
  return (
    <footer>
      <div className={classes.root}>
        {children}
        <div className={classes.wrapper}>
            <span
              onClick={() => {
                window.open("https://www.rionigroup.com")
              }}
            >
              © 2020 by Rioni Group
            </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
