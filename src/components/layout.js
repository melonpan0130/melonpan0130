/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { Video } from "gatsby-video"
import sampleVideo from "../images/sample.mp4"
// import Video from "./video"

import Header from "./header"
import Menubar from "./menubar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
      <Menubar/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
        {/* <Video
          poster={poster_image}
          autoPlay
          muted
          loop
        /> */}
        {/* <Video
          videoSrcURL="./images/sample.mp4"
          videoTitle="Official Music Video on YouTube"
        /> */}
        {/* <video src="../images/sample.mp4" autoPlay muted loop/> */}
        {/* <video width="100%" autoPlay loop >
          <source src="../images/sample.mp4"/>
        </video> */}
        <video autoPlay loop src={sampleVideo} type="video.mp4" />

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
