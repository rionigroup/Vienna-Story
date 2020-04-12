/**
 * this file is set for generic layout.
 * Every Components will be applied this layout
 */
import React from "react"
import PropTypes from "prop-types"
import { withTrans } from "../i18n/withTrans"

const i18nLayout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </>
  )
}

i18nLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(i18nLayout)
