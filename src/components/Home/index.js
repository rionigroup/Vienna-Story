import PropTypes from "prop-types"
import React from "react"
import style from './home.module.css'

const Home = ({children}) => {
  return(
    <div className={style.background}>
        {children}
    </div>
  )
}


Home.propTypes = {
  children: PropTypes.node.isRequired
}

Home.defaultProps = {
  children: <div/>
}

export default Home
