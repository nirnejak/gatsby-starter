import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"

import "../assets/scss/main.scss"

import "./index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
