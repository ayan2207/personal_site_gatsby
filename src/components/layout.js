/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import SEO from './SEO'
import '../styles/style.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Navbar, Nav, Button, Modal } from 'react-bootstrap'
import { Link } from 'gatsby'
import CheckoutForm from '../components/CheckoutForm'
import ContactForm from '../components/ContactForm'

config.autoAddCss = false

const Layout = ({ children, pageInfo, path }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setModalType(null);
  }
  const handleShow = (modalType) => {
    setShowModal(true);
    setModalType(modalType);
  }

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

  const modalTypes = [
    { id: 1, title: 'PayMe Secure Payment', size: 'md', component: <CheckoutForm /> },
    { id: 2, title: 'Contact Form', size: 'lg', component: <ContactForm closeModal={handleClose}/> }
  ]
  return (
    <>
      <SEO />
      <div className="container-fluid w-100 h-100 p-0 mx-auto flex-column">
        <Navbar sticky="top" variant="dark">
          <Navbar.Brand href="#home">
            >
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Button variant="secondary" className="mr-2" onClick={() => handleShow(modalTypes[0])}>PayMe</Button>
            <Button variant="primary" onClick={() => handleShow(modalTypes[1])}>Contact</Button>
          </Nav>
        </Navbar>
        {children}
        <Modal className="dynamic-modal" size={modalType && modalType.size} centered show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalType && modalType.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalType && modalType.component}
          </Modal.Body>
        </Modal>
        <footer className="mt-auto">
        </footer>
      </div>
    </>
  )
}

export default Layout
