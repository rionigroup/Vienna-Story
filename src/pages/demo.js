import React, { useState } from "react"
import SEO from "../components/seo"
import Content from "../components/Content"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core"
import Temp1  from '../components/Template/tem1'
import Temp2 from '../components/Template/tem2'
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => ({
  firstContainer: {
    position: 'relative',
    top: '7em',
    width: "80%",
    height: "100vh",
    margin: theme.spacing(1),
  },
  container: {
    position: 'relative',
    width: "80%",
    height: "100vh",
    margin: theme.spacing(1),
  }
}))

const Music = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Vienna Music" />
      <Content>
        <div className={classes.firstContainer}>
          <Temp1/>
        </div>
      </Content>
      <Content>
        <div className={classes.container}>
          <Temp2/>
        </div>
      </Content>
    </Layout>
  )
}

export default Music
