import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import CardItem from '../components/CardItem'
import FeatureGrid from '../components/FeatureGrid'
import Grid from '../components/Grid'
import Helmet from 'react-helmet'
import Container from '../components/Container'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}

      <Container>
        {/* <FeatureGrid /> */}

        <Grid gridColumn={'1/span 1'}>HELLO</Grid>

        {isFirstPage ? (
          <>
            <Card>
              Custom layout here with home page query with name and about.
            </Card>
            <CardList>
              <CardItem {...featuredPost} featured />
              {posts.slice(1).map(({ node: post }) => (
                <CardItem key={post.id} {...post} />
              ))}
            </CardList>
          </>
        ) : (
          <CardList>
            {posts.map(({ node: post }) => (
              <CardItem key={post.id} {...post} />
            ))}
          </CardList>
        )}{' '}
        */}
      </Container>
      {/* <Pagination context={pageContext} /> */}
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
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
  }
`

export default Index
