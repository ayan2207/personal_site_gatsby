/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import { Container } from "react-bootstrap"

const Layout = ({ children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          tagline
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">{data.site.siteMetadata.title}</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Projects</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <a href="#">Get In Touch</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
