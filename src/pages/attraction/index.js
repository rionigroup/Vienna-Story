import React from 'react' 
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import Temp1  from '../../components/Template/tem1'
import Content from '../../components/Content'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    top: '7em',
    width: "80%",
    height: "100vh",
    margin: theme.spacing(2),
  }
}))

const Attraction = props => {
  const classes = useStyles()
  return(
    <Layout>
      <SEO title="vienna attraction" />
      <Content>
        <div className={classes.container}>
          <Temp1/>
        </div>
      </Content>
    </Layout>
  )  
}

export default Attraction