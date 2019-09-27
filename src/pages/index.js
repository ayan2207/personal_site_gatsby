import React from "react"
import { Image } from 'react-bootstrap'
import Me from '../images/me.jpg'
import Avatar from 'avataaars'
// import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const IndexPage = () =>
{
  //   const data = useStaticQuery(graphql`
  //   {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //         tagline
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <main role="main" class="inner cover">
        <div>
          <Avatar
            avatarStyle='transparent'
            topType='ShortHairShortFlat'
            accessoriesType='Blank'
            hairColor='Black'
            facialHairType='BeardLight'
            facialHairColor='Black'
            clotheType='Hoodie'
            clotheColor='white'
            eyeType='Squint'
            eyebrowType='DefaultNatural'
            mouthType='Default'
            skinColor='Light'
          />
        </div>
        <h1 class="display-3"></h1>
        <p class="lead">Ayan Hedayati</p>
        <p class="lead">
          {/* <a href="#" class="btn btn-lg btn-secondary">Learn more</a> */}
        </p>
      </main>
    </Layout>
  )
}

export default IndexPage