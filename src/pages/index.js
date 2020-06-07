import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/Home"
import { useTranslation } from "react-i18next"
import "../styles/global.scss"
import style from "./index.module.scss"

const opacityStyle = {
  opacity: 0,
}

const noOpacityStyle = {
  opacity: 1,
  transition: "opacity 1s",
}

const IndexPage = () => {
  const { t } = useTranslation()
  const [cardSet, setCardSet] = useState(null)
  const [isCardReady, setIsCardReady] = useState(false)
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
          className={style.imgWrapper}
          src={el.pic_url}
          onClick={eve => clickOnImg(eve, el)}
        />
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Home isOpacity={true}>
        <div
          className={style.titleWrapper}
          style={isCardReady ? noOpacityStyle : opacityStyle}
        >
          <h3>{t("home_welcomeText")}</h3>
          <h5>{t("home_subWelcomeText")}</h5>
        </div>
        <div
          className={style.contentWrapper}
          style={isCardReady ? noOpacityStyle : opacityStyle}
        >
          {cardSet}
        </div>
      </Home>
    </Layout>
  )
}

export default IndexPage
