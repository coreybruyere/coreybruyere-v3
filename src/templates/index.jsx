import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'rebass/styled-components'
import { rem } from 'polished'
// import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import CardList from '../components/CardList'
// import Card from '../components/Card'
// import WorkList from '../components/CardList'
import PostCard from '../components/PostCard'
import WorkCard from '../components/WorkCard'
import Grid from '../components/Grid'
import Container from '../components/Container'
import Section from '../components/Section'
import VerticalText from '../components/VerticalText'
import Position from '../components/Position'
import SEO from '../components/SEO'

import ChevronDown from '../../assets/chevronDown.svg'

// import Pagination from '../components/Pagination'
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
              <Grid
                gridColumn={['1/span 8', '1/span 8', '1/span 5']}
                pt={[1, 1, 2]}
              >
                <Box mt={[2, 2, 4]} mb={[2, 2, 3]} as="h1">
                  Hi, I'm Corey Bruyere
                </Box>

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
            <Grid gridColumn={'1 / span 1'} pt={4} pb={3}>
              <Position position="sticky" top={rem(72)}>
                <Flex justifyContent="left" fontSize={5}>
                  <VerticalText as="a" href="#work">
                    WORK
                    <Box as="span" mt={2}>
                      <ChevronDown />
                    </Box>
                  </VerticalText>
                </Flex>
              </Position>
            </Grid>
            <Grid gridColumn={'2 / span 7'}>
              <CardList>
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
          publishDate(formatString: "MMM DD, YYYY")
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
          publishDate(formatString: "MMM DD, YYYY")
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
