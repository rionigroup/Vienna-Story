import React, { useState } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import DropDown from "../components/Dropdown"
import Tooltip from "../components/Tooltip"
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core"

const langs = [
  { text: "English", value: "en-US" },
  { text: "中文", value: "zh-TW" },
  { text: "日本語", value: "jp" },
]

const useStyles = makeStyles(theme => ({
  roundMap: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  headWrapper: {
    position:'fixed',
    zIndex:'999',
    margin:'0 auto',
    width:'100vw',
    padding:'1.45rem 1.0875rem',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: 'rgba(255, 255, 255, 0.4)',
      padding: '20px'
    }
  },
  languageWrapper: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
  },
  langTextWrapper: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    color:'#609595'
  },
  languageText: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    fontWeight:'500',
    fontSize:'0.6em',
    margin:'auto 1em',
    cursor:'pointer',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 'bold',
      fontSize: '0.5em'
    }
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
      <div className={classes.headWrapper}>
        <Grid item xs={7} sm={9} md={9} lg={9}>
        </Grid>
        <Grid item container xs={5} sm={3} md={3} lg={3}>
          <Grid item container xs={10} justify={'flex-end'} alignItems={'center'}>
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
