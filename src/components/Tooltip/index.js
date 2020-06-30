import React from "react"
import PropTypes from "prop-types"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
}))

const CustomTip = props => {
  const classes = useStyles()
  const { childeNode, text } = props
  return (
    <div>
      <Tooltip className={classes.root} title={text}>
        { childeNode }
      </Tooltip>
    </div>
  )
}

export default CustomTip

CustomTip.propTypes = {
  text: PropTypes.string,
  childNode: PropTypes.node,
}

CustomTip.defaultProps = {
  text: "this is a tooltip",
  childNode: <div></div>,
}
