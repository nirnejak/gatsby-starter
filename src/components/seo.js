import React from "react"
import { Helmet } from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

import PropTypes from "prop-types"

function SEO({ children, description, lang, meta, title, image, path }) {
  const { site } = useStaticQuery(query)

  const metaTitle = title || site.siteMetadata.title
  const metaImage = image || site.siteMetadata.image
  const metaDescription = description || site.siteMetadata.description

  const metaUrl = path
    ? `${site.siteMetadata.siteUrl}${path}/`
    : `${site.siteMetadata.siteUrl}`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={[
        {
          content: `width=device-width, initial-scale=1`,
          name: `viewport`,
        },
        {
          content: `Lorem Ipsum dolor set amet`,
          name: `keywords`,
        },
        {
          content: site.siteMetadata.author,
          name: `author`,
        },
        {
          content: metaImage,
          name: `image`,
        },
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: "MyApplication",
          name: "application-name",
        },
        // Schema.org for Google
        {
          content: site.siteMetadata.title,
          itemprop: "name",
        },
        {
          content: metaDescription,
          itemprop: "description",
        },
        {
          content: metaDescription,
          itemprop: "description",
        },
        // Open Graph
        {
          content: metaUrl,
          property: `og:url`,
        },
        {
          content: metaTitle,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: metaImage,
          property: `og:image`,
        },
        {
          href: metaUrl,
          name: "canonical",
        },
        {
          href: metaUrl,
          hreflang: "en",
          name: "alternate",
        },
        {
          href: metaUrl,
          hreflang: "x-default",
          name: "alternate",
        },
      ].concat(meta)}
    >
      {children}
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`

export default SEO
