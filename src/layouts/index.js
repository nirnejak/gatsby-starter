import React from "react"

import { StaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"

import "../assets/scss/main.scss"

import "./index.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => {
      return <main>{children}</main>
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
