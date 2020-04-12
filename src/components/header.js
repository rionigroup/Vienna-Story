import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faGlobeEurope } from "@fortawesome/free-solid-svg-icons"
import DropDown from "../components/Dropdown"
import style from "./header.module.scss"

const langs = [
  { text: "English", value: "en-US" },
  { text: "中文(繁體)", value: "zh-TW" },
  { text: "日本語", value: "jp" },
]

const Header = () => {
  const { i18n } = useTranslation()

  const [isDropDownShow, setIsDropDownShow] = useState(false)
  const [menuValue, setMenuValue] = useState("English")

  // useEffect(() => {
  //   let localLanguage = localStorage.getItem("lang")
  //   if (typeof localLanguage !== "string") localLanguage = null
  //   const userLang = localStorage.getItem("lang") || navigator.language
  //   const langText = langs.filter(el => el.value === userLang)
  //   const defaultLang = langText.length > 0 ? langText[0].text : "English"
  //   if (["en-US", "zh-TW", "jp"].includes(userLang) && userLang !== "en-US") {
  //     console.log('******', userLang)
  //     i18n.changeLanguage(userLang)
  //   }
  //   setMenuValue(defaultLang)
  // }, [])

  const clickMenu = item => {
    if (!item) return null
    const { value, text } = item
    localStorage.setItem("lang", value)
    setMenuValue(text)
    i18n.changeLanguage(value)
  }

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
        <h3 style={{ margin: "auto 1em" }}>
          <Link to="/" className={style.headerText}>
            <span style={{ color: "#80cbc4" }}>
              GL
              <FontAwesomeIcon icon={faGlobeEurope}/>
              CAL
            </span>
          </Link>
        </h3>
        <div style={{ display: "flex" }}>
          <h3 style={{ margin: "auto 1em" }} className={style.languageWrapper}>
            <div className={style.langTextWrapper}>
              <FontAwesomeIcon icon={faGlobe} size="xs" />
              <span onClick={showMenu} className={style.languageText}>
                {menuValue}
              </span>
            </div>
            <div style={{ width: "90%" }}>
              <DropDown
                isShow={isDropDownShow}
                elements={langs}
                clickFunc={clickMenu}
              />
            </div>
          </h3>
        </div>
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
