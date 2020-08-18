import React from "react"
import SEO from "../../components/seo"
import { attraction } from '../../model/attraction'
import Layout from "../../components/layout"
import Temp1 from "../../components/Template/tem1"
import Temp2 from '../../components/Template/tem2'
import Content from "../../components/Content"
import BigImgTitle from '../../components/BigImgTitle'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    top: "4em",
    width: "80%",
    height: "100vh",
    margin: theme.spacing(2),
  }
}))

const TempList =  () => attraction.map(o => {
  const tempCode = o.temp
  switch(tempCode) {
    case 0 :
      return <Temp1 key={o.name} {...o}/>
    case 1: 
      return <Temp2 key={o.name} {...o}/>
    default:
      return <></>
  }
})

const LayoutWithLogo = Layout(true)

const Attraction = props => {
  const classes = useStyles()
  return (
    <LayoutWithLogo>
      <SEO title="Vienna Attraction" />
      <Content>
        <div className={classes.container}>
          <BigImgTitle imgUrl={'/images/title/attraction.png'}/>
          <TempList/>
        </div>
      </Content>
    </LayoutWithLogo>
  )
}

export default Attraction

