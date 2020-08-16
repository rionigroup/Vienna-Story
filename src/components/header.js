import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import DropDown from "../components/Dropdown"
import Tooltip from "../components/Tooltip"
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core"

const viennaUrl =
  "https://www.google.com.tw/maps/place/%E5%A5%A7%E5%9C%B0%E5%88%A9%E7%B6%AD%E4%B9%9F%E7%B4%8D/@48.2038143,16.333146,11.52z/data=!4m5!3m4!1s0x476d079e5136ca9f:0xfdc2e58a51a25b46!8m2!3d48.2081743!4d16.3738189?hl=zh-TW"

let lastScrollTop = 0

const langs = [
  { text: "English", value: "en-US" },
  { text: "中文", value: "zh-TW" },
  // { text: "日本語", value: "jp" },
]

const useStyles = makeStyles(theme => ({
  roundMap: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  headWrapper: {
    position: "fixed",
    zIndex: "999",
    margin: "0 auto",
    width: "100vw",
    padding: "0.8em 1.0875rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  languageWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  langTextWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.grey[700],
  },
  languageText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "500",
    fontSize: "0.6em",
    margin: "auto 1em",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "bold",
      fontSize: "0.5em",
    },
  },
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
}))

const Header = props => {
  const { hasLogo } = props
  const { i18n } = useTranslation()
  const [isDropDownShow, setIsDropDownShow] = useState(false)
  const [isNavOverBody, setIsNavOverBody] = useState(false)
  const [menuValue, setMenuValue] = useState("English")
  const classes = useStyles()
  const handleGlobalScroll = eve => {
    let st = window.pageYOffset || document.documentElement.scrollTop
    if(st > lastScrollTop) {
      setIsNavOverBody(true)
    } else {
      setIsNavOverBody(false)
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll)
    return () => window.removeEventListener("scroll", handleGlobalScroll)
  }, [])

  const clickMenu = item => {
    if (!item) return null
    const { value, text } = item
    localStorage.setItem("lang", value)
    setMenuValue(text)
    i18n.changeLanguage(value)
  }

  const roundMapIcon = (
    <CardMedia
      image="/images/map_round.png"
      className={classes.roundMap}
      onClick={() => window.open(viennaUrl)}
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
      <div
        className={classes.headWrapper}
        style={isNavOverBody ? { background: "rgba(235, 216, 208, 0.3)" } : null}
      >
        <Grid item xs={7} sm={9} md={9} lg={9}>
          {hasLogo && (
            <Link to="/" className={classes.mediaWrapper}>
              <CardMedia image="/images/logo.png" className={classes.media} />
            </Link>
          )}
        </Grid>
        <Grid item container xs={5} sm={3} md={3} lg={3}>
          <Grid
            item
            container
            xs={10}
            justify={"flex-end"}
            alignItems={"center"}
          >
            <h3
              style={{ margin: "auto 1em" }}
              className={classes.languageWrapper}
            >
              <div className={classes.langTextWrapper}>
                <FontAwesomeIcon icon={faGlobe} size="xs" />
                <span onClick={showMenu} className={classes.languageText}>
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
            xs={2}
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
