import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Acasa" lang="ro" />
    <div className="content">
      <StaticImage
        style={{ borderRadius: "16px", height: "220px" }}
        src="../images/corina_logo_acapulco.jpeg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Acapulco logo"
      />
      <h1 style={{ fontFamily: "Fascinate, sans, serif" }}>În construcție</h1>
    </div>
  </Layout>
)

export default IndexPage
