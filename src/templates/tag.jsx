import React from 'react'
import { graphql } from 'gatsby'
import orderBy from 'lodash/orderBy'
import Helmet from 'react-helmet'
import moment from 'moment'

import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
import CardList from '../components/CardList'
import Pagination from '../components/Pagination'
import Container from '../components/Container'
import PageTitleSection from '../components/PageTitleSection'
import { PageBodyWrap } from '../components/PageBody'

const TagTemplate = ({ data, pageContext }) => {
  const posts = orderBy(
    data.contentfulTag.post,
    // eslint-disable-next-line
    [object => new moment(object.publishDateISO)],
    ['desc']
  )

  const { title, slug } = data.contentfulTag
  const numberOfPosts = posts.length
  const skip = pageContext.skip
  const limit = pageContext.limit
  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}

      <PageTitleSection
        id={`${title}`}
        title={`${numberOfPosts} Posts Tagged z: "${title}"`}
      >
        {/* Match styling from PageBody */}
        <PageBodyWrap>
          <CardList>
            {posts.slice(skip, limit * currentPage).map(post => (
              <PostCard {...post} key={post.id} />
            ))}
          </CardList>
          <Pagination context={pageContext} />
        </PageBodyWrap>
      </PageTitleSection>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")
        heroImage {
          title
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        body {
          childMarkdownRemark {
            timeToRead
            html
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`

export default TagTemplate
