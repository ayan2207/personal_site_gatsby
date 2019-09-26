import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
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
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.tagline}</h2>
    </div>
  )
}

export default IndexPage