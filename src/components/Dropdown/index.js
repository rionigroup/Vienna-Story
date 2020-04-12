import React from "react"
import PropTypes from "prop-types"
import style from "./index.module.scss"

const DropDown = props => {
  const { isShow, elements, clickFunc } = props
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
      return <ul className={style.wrapper}>{items}</ul>
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
