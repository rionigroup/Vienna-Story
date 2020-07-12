import React, { useState } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
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
    margin: "auto 3em",
  },
  popBlock: {
    position: "absolute",
    bottom: "3.5em",
    right: "1em",
    height: "120px",
    width: "450px",
    borderLeft: "10px solid #ddd6c9",
  },
  title: {
    fontSize: "14px",
  },
  subTitle: {
    fontSize: "16px",
  },
}))

const PopUp = () => {
  const classes = useStyles()
  return (
    <Card className={classes.popBlock}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Who is Rioni Group?
        </Typography>
        <Typography className={classes.subTitle} gutterBottom>
          Rioni Group Creates Holistic Brand Development For Your Asian
          Audience. Click The 'Grioni Group' to see more.
        </Typography>
      </CardContent>
    </Card>
  )
}

const Footer = () => {
  const classes = useStyles()
  const [isPopBlockOpen, setPopBlockOpen] = useState(false)
  const handleOnMouseEnter = eve => {
    eve.stopPropagation()
    setPopBlockOpen(true)
  }
  const handleOnMouseLeave = eve => {
    eve.stopPropagation()
    setPopBlockOpen(false)
  }

  return (
    <footer>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <h5>
            <span
              style={{ color: "#609595", cursor: "pointer" }}
              onClick={() => {
                window.open("https://www.rionigroup.com")
              }}
            >
              © 2020 by Rioni Group
            </span>
          </h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer
