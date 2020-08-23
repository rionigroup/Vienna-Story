import React from "react"
import SEO from "../../components/seo"
import { shopping } from '../../model/shopping'
import Layout from "../../components/layout"
import Temp1 from "../../components/Template/tem1"
import Content from "../../components/Content"
import BigImgTitle from "../../components/BigImgTitle"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    top: "7em",
    width: "80%",
    height: "100vh",
    margin: theme.spacing(2),
  }
}))

const TempList =  () => shopping.map(o => {
  const tempCode = o.temp
  if(tempCode === 0) return <Temp1 key={o.name} {...o}/>
})

const LayoutWithLogo = Layout(true)

const Shopping = props => {
  const classes = useStyles()
  return (
    <LayoutWithLogo>
      <SEO title="Vienna Shopping" />
      <Content>
        <div className={classes.container}>
        <BigImgTitle imgUrl={"/images/title/shopping.png"}/>
          <TempList/>
        </div>
      </Content>
    </LayoutWithLogo>
  )
}

export default Shopping
