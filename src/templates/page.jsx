import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PageBody from '../components/PageBody'
import PageTitleSection from '../components/PageTitleSection'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <PageTitleSection id={`${title}`} title={`${title}`} isArticle>
        <PageBody body={body} />
      </PageTitleSection>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
