import PropTypes from "prop-types"
import React from "react"
import style from "./home.module.scss"

const Home = ({ children, fixHeight }) => {
  return (
    <div
      className={style.background}
      style={fixHeight ? {} : { height: "auto" }}
    >
      {children}
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
  fixHeight: PropTypes.bool
}

Home.defaultProps = {
  children: <div />,
  fixHeight: true
}

export default Home
