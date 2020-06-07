import React, { useState } from "react"
import SEO from "../components/seo"
import Home from "../components/Home"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => ({
  gridRoot: {
    width: "100%",
    margin: theme.spacing(3)
  },
  container: {
    position: 'relative',
    top: '10em'
  }
}))

const Music = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="vienna music" />
      <Home fixHeight={false}>
        <div className={classes.container} style={{ height: "100vh" }}>
        <h3 style={{color: 'white'}}>Music</h3>
        </div>
      </Home>
    </Layout>
  )
}

export default Music