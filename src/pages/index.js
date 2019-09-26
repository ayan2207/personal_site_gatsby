import React from "react"
import { Container, Button, Jumbotron } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () =>
{
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
    <Container fluid>
      <Jumbotron>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.tagline}</p>
        <p>
          <Button variant="primary">Say Hi</Button>
        </p>
      </Jumbotron>
    </Container>
  )
}

export default IndexPage