import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import CardItem from '../components/CardItem'
import FeatureGrid from '../components/FeatureGrid'
import Grid from '../components/Grid'
import Container from '../components/Container'
import Section from '../components/Section'
import Pagination from '../components/Pagination'
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
        <Section id="test">
          <Grid
            display="grid"
            gridGap={3}
            gridTemplateColumns={'repeat(8, 1fr)'}
          >
            <Grid
              display="grid"
              gridColumn={'1/span 8'}
              gridTemplateColumns="subgrid"
              p={4}
              backgroundColor="red"
            >
              <Grid gridColumn={'1/span 5'} backgroundColor="red">
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
            <Grid gridColumn={'1/span 3'} p={4}>
              <a href="#work">Work V</a>
            </Grid>
            <Grid gridColumn={'4/span 5'} p={4}>
              <Box>
                <h2>Blog Post 1</h2>

                <p>
                  This is a paragraph. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nisi harum eaque reiciendis debitis
                  blanditiis repellat. QUERY LAST 3 BLOG POSTS ON HOME PAGE.
                  DISPLAY VIEW MORE BUTTON THAT LINKS TO PAGINATED ARCHIVE
                </p>

                <button>Read More</button>
              </Box>

              <Box>
                <h2>Blog Post 1</h2>

                <p>
                  This is a paragraph. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nisi harum eaque reiciendis debitis
                  blanditiis repellat,
                </p>

                <button>Read More</button>
              </Box>

              <Box>
                <h2>Blog Post 1</h2>

                <p>
                  This is a paragraph. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nisi harum eaque reiciendis debitis
                  blanditiis repellat,
                </p>

                <button>Read More</button>
              </Box>

              <Box>
                <h2>Blog Post 1</h2>

                <p>
                  This is a paragraph. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Nisi harum eaque reiciendis debitis
                  blanditiis repellat,
                </p>

                <button>Read More</button>
              </Box>
            </Grid>

            <Grid gridColumn={'span 2'} id="work">
              <Card>Item</Card>
            </Grid>

            <Grid gridColumn={'span 2'} id="work">
              <Card>Item</Card>
            </Grid>

            <Grid gridColumn={'span 2'} id="work">
              <Card>Item</Card>
            </Grid>

            <Grid gridColumn={'span 2'} id="work">
              <Card>Item</Card>
            </Grid>
          </Grid>

          {/* Create Archive Page to display all posts. */}
          {/* {isFirstPage ? (
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
        )}*/}
        </Section>
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
