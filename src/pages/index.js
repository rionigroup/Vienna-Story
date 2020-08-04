import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CardMedia from "@material-ui/core/CardMedia"
import SEO from "../components/seo"
import Home from "../components/Home"
import { useTranslation } from "react-i18next"
import "../styles/global.scss"
import { makeStyles } from "@material-ui/core"

const opacityStyle = {
  opacity: 0,
}

const noOpacityStyle = {
  opacity: 1,
  transition: "opacity 1s",
}

const useStyles = makeStyles(theme => ({
  mediaWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "3em auto",
  },
  media: {
    width: "250px",
    height: "35px",
    margin: "auto 10px"
  },
  titleWrapper: {
    width: "100%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10em",
    "& h5": {
      textAlign: "center",
      textAnchor: "middle",
      color: "#609595",
      zIndex: "100",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: "400",
      letterSpacing: "0.1em",
      maxWidth: '1000px',
      fontSize: "1.2em",
      lineHeight: '2em'
    },
    [theme.breakpoints.down('sm')]: {
      position: "relative",
      top: "5em",
      height: "180px",
      "& h5": {
        fontWeight: "300",
        fontSize: "1em",
      },
    }
  },
  contentWrapper: {
    zIndex: "300",
    width: "100%",
    minHeight: "250px",
    height: '100%',
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "10em",
    [theme.breakpoints.down('sm')]: {
      marginTop: '5em'
    }
  },
  imgWrapper: {
    cursor:'pointer',
    borderRadius:'20px',
    boxShadow:'0 10px 15px -3px rgba(0, 0, 0, 0.1) 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    height:'100%',
    width:'90%',
    transition: '0.4s',
    '&:hover': {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      width:'80%',
      height:'80%',
    },
    [theme.breakpoints.down('xs')]: {
      width:'60%',
      height:'60%',
      pointerEvents:'none'
    }
  }
}))

const LayoutWithoutLogo = Layout(false)

const IndexPage = () => {
  const { t } = useTranslation()
  const [cardSet, setCardSet] = useState(null)
  const [isCardReady, setIsCardReady] = useState(false)
  const classes = useStyles()
  useEffect(() => {
    const card = renderCard
    setCardSet(card)
    setTimeout(() => {
      setIsCardReady(true)
    }, 1000)
  }, [])
  const menu = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            pic_url
          }
        }
      }
    }
  `)

  const cardInfo = menu.site.siteMetadata.menuLinks.slice(1)
  const clickOnImg = (eve, attr) => {
    eve.stopPropagation()
    window.location = attr.link
  }
  const renderCard = cardInfo.map((el, i) => {
    return (
      <div className="col col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <img
          key={`${el}_${i}`}
          className={classes.imgWrapper}
          src={el.pic_url}
          onClick={eve => clickOnImg(eve, el)} 
        />
      </div>
    )
  })

  return (
    <LayoutWithoutLogo>
      <SEO title="Home" />
      <Home isOpacity={true}>
        <div
          className={classes.titleWrapper}
          style={isCardReady ? noOpacityStyle : opacityStyle}
        >
          <Link to="/" className={classes.mediaWrapper}>
            <CardMedia image="/images/logo.png" className={classes.media} />
          </Link>
          <h5>{t("home_subWelcomeText")}</h5>
        </div>
        <div
          className={classes.contentWrapper}
          style={isCardReady ? noOpacityStyle : opacityStyle}
        >
          {cardSet}
        </div>
      </Home>
    </LayoutWithoutLogo>
  )
}

export default IndexPage
