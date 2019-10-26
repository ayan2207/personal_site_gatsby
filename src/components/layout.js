/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import SEO from './SEO'
import '../styles/style.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

config.autoAddCss = false

const Layout = ({ children, pageInfo, path }) => {
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
  return (
    <>
      <SEO />
      <div className="container-fluid w-100 h-100 p-0 mx-auto flex-column">
        <Navbar sticky="top" variant="dark">
          <Navbar.Brand href="#home">
            >
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/payme" className="btn btn-secondary mr-3">PayMe</Link>
            <Button variant="primary">Contact</Button>
        </Navbar>
          {children}
          <footer className="mt-auto">
          </footer>
      </div>
    </>
      )
    }
    
    export default Layout
