import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  background : {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // background: '#f1f1f1',
    zIndex: '10',
  }
}))

const Content = ({ children }) => {
  const classes = useStyles()
  return (
    <div
      className={classes.background}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}

Content.defaultProps = {
  children: <div />
}

export default Content
