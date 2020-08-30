/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"

const Layout = (hasLogo = false) => ({ children, t }) =>  {
  return (
    <ThemeProvider theme={theme}>
      <Header hasLogo={hasLogo} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
