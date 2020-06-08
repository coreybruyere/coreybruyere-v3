import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostPagination from '../components/PostPagination'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'
import PageTitleSection from '../components/PageTitleSection'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <PageTitleSection id={`${title}`} title={`${title}`} isArticle>
        <PostDetails
          date={publishDate}
          timeToRead={body.childMarkdownRemark.timeToRead}
        />
        <PageBody body={body} />

        {tags && <TagList tags={tags} />}

        <PostPagination previous={previous} next={next} />
      </PageTitleSection>

      {/* <Hero title={title} image={heroImage} height={'50vh'} /> */}
      {/* 
      <Section>
        <Grid as="article" gridColumn={'1 / span 8'}>
          {tags && <TagList tags={tags} />}
          <PostDetails
            date={publishDate}
            timeToRead={body.childMarkdownRemark.timeToRead}
          />
          <PageBody body={body} />
        </Grid>
      </Section> */}
      {/* <PostLinks previous={previous} next={next} /> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
