import React from "react"
import SEO from "../../components/seo"
import { wellness } from '../../model/wellness'
import Layout from "../../components/layout"
import Temp1 from "../../components/Template/tem1"
import Content from "../../components/Content"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    top: "7em",
    width: "80%",
    height: "100vh",
    margin: theme.spacing(2),
  },
  bigTitle: {
    width: '100%',
    textAlign: 'center',
  }
}))

const TempList =  () => wellness.map(o => {
  const tempCode = o.temp
  if(tempCode === 0) return <Temp1 key={o.name} {...o}/>
})

const LayoutWithLogo = Layout(true)

const Wellness = props => {
  const classes = useStyles()
  return (
    <LayoutWithLogo>
      <SEO title="vienna wellness" />
      <Content>
        <div className={classes.container}>
          <h3 className={classes.bigTitle}>Wellness</h3>
          <TempList/>
        </div>
      </Content>
    </LayoutWithLogo>
  )
}

export default Wellness
