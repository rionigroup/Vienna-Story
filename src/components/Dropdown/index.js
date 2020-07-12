import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wrapper: {
    background: 'white',
    borderRadius: '8px',
    fontSize: '1.1em',
    fontWeight: '400',
    boxShadow: '0 2px 2px 0 rgba(255,255,255,0.14), 0 3px 1px -2px rgba(255,255,255,0.14), 0 1px 5px 0 rgba(255,255,255,0.14)',
    padding: '0.8em 0.5em',
    color: theme.palette.grey[600],
    position: 'absolute',
    width: '100%',
    top: '1.1em',
    zIndex: '800',
    '& li': {
      fontSize: '0.5em',
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.grey[300]
      }
    }
  }
}))

const DropDown = props => {
  const { isShow, elements, clickFunc } = props
  const classes = useStyles()
  const items = elements.map((el, i) => (
    <li key={`${el}_${i}`} onClick={eve => handleOnClick(eve, el)}>
      {el.text}
    </li>
  ))

  const handleOnClick = (eve, val) => {
    eve.stopPropagation()
    clickFunc(val)
  }
  const render = () => {
    if (isShow) {
      return <ul className={classes.wrapper}>{items}</ul>
    } else {
      return null
    }
  }
  return render()
}

DropDown.propTypes = {
  isShow: PropTypes.bool.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  clickFunc: PropTypes.func,
}

DropDown.defualtProps = {
  isShow: false,
  elements: [
    { text: "1", value: 1 },
    { text: "2", value: 2 },
    { text: "3", value: 3 },
  ],
  clickFunc: () => {},
}

export default DropDown
