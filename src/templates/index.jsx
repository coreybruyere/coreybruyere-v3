import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex } from 'rebass/styled-components'
// import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import WorkList from '../components/CardList'

import PostCard from '../components/PostCard'
import WorkCard from '../components/WorkCard'
import Grid from '../components/Grid'
import Container from '../components/Container'
import Section from '../components/Section'
// import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
// import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const works = data.allContentfulWork.edges

  // const featuredPost = posts[0].node
  // const { currentPage } = pageContext
  // const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />

      <Container>
        <Section id="about">
          <Grid display="grid" gridTemplateColumns={'repeat(8, 1fr)'}>
            <Grid
              display="grid"
              gridColumn={'1/span 8'}
              gridTemplateColumns="subgrid"
            >
              <Grid gridColumn={['1/span 8', '1/span 8', '1/span 5']}>
                <h1>Hi, I'm Corey Bruyere</h1>

                <p>
                  This is a paragraph. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nisi harum eaque reiciendis debitis
                  blanditiis repellat, aliquam ex tenetur numquam iusto quisquam
                  culpa minus cumque ea, laborum recusandae repudiandae nobis
                  aliquid. QUERY HOME PAGE ABOUT
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Section>

        <Section id="posts">
          <Grid display="grid" gridTemplateColumns={'repeat(8, 1fr)'}>
            <Grid gridColumn={'1 / span 2'} p={4}>
              <a href="#work">Work V</a>
            </Grid>
            <Grid gridColumn={'3 / span 6'} p={4}>
              <CardList>
                {console.log(posts)}
                {posts.map(({ node: post }) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </CardList>
            </Grid>
          </Grid>
        </Section>
      </Container>

      <Section id="work">
        <Flex
          as="ul"
          sx={{
            overflowX: 'auto',
          }}
        >
          {works.map(({ node: post }) => (
            <WorkCard key={post.id} {...post} />
          ))}
        </Flex>
      </Section>
    </Layout>
  )
}

export const postsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulWork(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
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
