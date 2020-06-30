import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import DropDown from "../components/Dropdown"
import Tooltip from "../components/Tooltip"
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core"
import style from "./header.module.scss"

const langs = [
  { text: "English", value: "en-US" },
  { text: "中文(繁體)", value: "zh-TW" },
  { text: "日本語", value: "jp" },
]

const useStyles = makeStyles(theme => ({
  mediaWrapper: {
    width: "100%",
    height: "100%",
  },
  media: {
    width: "250px",
    height: "35px",
    margin: "auto 10px",
    [theme.breakpoints.down("xs")]: {
      width: "60%",
      height: "22px",
    },
  },
  roundMap: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
}))

const Header = () => {
  const { i18n } = useTranslation()
  const [isDropDownShow, setIsDropDownShow] = useState(false)
  const [menuValue, setMenuValue] = useState("English")

  const classes = useStyles()

  const clickMenu = item => {
    if (!item) return null
    const { value, text } = item
    localStorage.setItem("lang", value)
    setMenuValue(text)
    i18n.changeLanguage(value)
  }

  const roundMapIcon = (
    <CardMedia
      image="images/map_round.png"
      className={classes.roundMap}
      onClick={() => window.open("https://www.shorturl.at/bfkCN")}
    />
  )

  const showMenu = () => {
    setIsDropDownShow(true)
    document.addEventListener("click", closeMenu)
  }

  const closeMenu = () => {
    setIsDropDownShow(false)
    document.removeEventListener("click", closeMenu)
  }

  return (
    <header>
      <div className={style.headWrapper}>
        <Grid item xs={7} sm={9} md={9} lg={10}>
          <Link to="/" className={classes.mediaWrapper}>
            <CardMedia image="images/logo.png" className={classes.media} />
          </Link>
        </Grid>

        <Grid item container xs={5} sm={3} md={3} lg={2}>
          <Grid item container xs={6} justify={'center'} alignItems={'center'}>
            <h3
              style={{ margin: "auto 1em" }}
              className={style.languageWrapper}
            >
              <div className={style.langTextWrapper}>
                <FontAwesomeIcon icon={faGlobe} size="xs" />
                <span onClick={showMenu} className={style.languageText}>
                  {menuValue}
                </span>
              </div>
              <div style={{ width: "100px" }}>
                <DropDown
                  isShow={isDropDownShow}
                  elements={langs}
                  clickFunc={clickMenu}
                />
              </div>
            </h3>
          </Grid>
          <Grid
            item
            container
            xs={6}
            justify={"center"}
            alignItems={"center"}
            style={{ height: "100%", width: "100%" }}
          >
           <Tooltip text={"Vienna Map"} childeNode={roundMapIcon} />
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
