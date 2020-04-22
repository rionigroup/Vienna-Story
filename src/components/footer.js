import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import style from "./footer.module.scss"

const footerWrap = {
  display: 'flex',
  justifyContent: 'space-around'
}
const Footer = () =>{
  return <footer>
    <div className={style.footerWrapper}>
      <div style={footerWrap}>
        {/* <h3 style={{ margin: "auto 1em" }} className={style.mediaWrapper}>
          <FontAwesomeIcon icon={faFacebook} size="xs" style={{margin: 'auto 0.5em'}}/>
          <FontAwesomeIcon icon={faYoutube} size="xs" style={{margin: 'auto 0.5em'}}/>
          <FontAwesomeIcon icon={faInstagram} size="xs" style={{margin: 'auto 0.5em'}}/>
        </h3> */}
        <h5>
          <span>© 2020 by Rioni Group</span>
        </h5>
      </div>
    </div>
    </footer>
}

export default Footer