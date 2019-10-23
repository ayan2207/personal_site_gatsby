/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import '../styles/style.scss'
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
    <>
      <Helmet
        title={`Ayan Hedayati | ${data.site.siteMetadata.title} `}
        meta={[
          { name: data.site.siteMetadata.author, content: data.site.siteMetadata.tagline }
        ]}
      >
      </Helmet>
      <div className="container-fluid w-100 h-100 p-0 mx-auto flex-column">
        <nav className="navbar navbar-expand justify-content-between sticky-top">
          <h3 className="m-0 p-0 navbar-brand text-light align-items-center">> {data.site.siteMetadata.title} _</h3>
          <div className="navbar-nav">
            {/* <a className="p-1 nav-item nav-link active" href="#">Home</a>
            <a className="p-1 nav-item nav-link" href="#">What I do</a>
            <a className="p-1 nav-item nav-link d-none d-md-block" href="#">Contact</a> */}
          </div>
        </nav>
        {children}
        <footer className="mt-auto">
          {/* <div className="inner">
          <button className="btn btn-primary btn-lg btn-sm-block d-md-none" href="#">Get In Touch</button>
        </div> */}
        </footer>
      </div>
    </>
  )
}

export default Layout
