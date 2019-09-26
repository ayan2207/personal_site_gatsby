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
      <p>This is v2 of this site split test</p>
    </div>
  )
}

export default IndexPage