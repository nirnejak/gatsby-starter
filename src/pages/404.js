import React from "react"

import ErrorContainer from "../components/ErrorContainer"
import Footer from "../components/footer"
import Header from "../components/header"
import SEO from "../components/seo.js"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Header />
    <ErrorContainer />
    <Footer />
  </>
)

export default NotFoundPage
