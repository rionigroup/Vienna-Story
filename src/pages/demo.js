import React, { useState } from "react"
import SEO from "../components/seo"
import Content from "../components/Content"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core"
import Temp1  from '../components/Template/tem1'
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    top: '7em',
    width: "80%",
    height: "100vh",
    margin: theme.spacing(2),
  }
}))

const Music = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="vienna music" />
      <Content>
        <div className={classes.container}>
          <Temp1/>
        </div>
      </Content>
    </Layout>
  )
}

export default Music
