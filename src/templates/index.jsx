import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'rebass'
import { rem } from 'polished'
// import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import CardList from '../components/CardList'
// import Card from '../components/Card'
// import WorkList from '../components/CardList'
import PostCard from '../components/PostCard'
import WorkCard from '../components/WorkCard'
import WorkCardList from '../components/WorkCardList'
import Grid from '../components/Grid'
import Section from '../components/Section'
import PageTitleSection from '../components/PageTitleSection'
import VerticalText from '../components/VerticalText'
import Position from '../components/Position'
import AboutImage from '../components/AboutImage'
import SEO from '../components/SEO'

import ChevronDown from '../../assets/chevronDown.svg'

// import Pagination from '../components/Pagination'
// import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const works = data.allContentfulWork.edges
  const {
    preHeading,
    heading,
    workSectionCtaHref,
    workSectionCtaText,
    aboutBody,
  } = data.contentfulHomePage

  // const featuredPost = posts[0].node
  // const { currentPage } = pageContext
  // const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />

      <PageTitleSection
        id="intro"
        preTitle={preHeading}
        title={heading}
        aside={<AboutImage />}
        isArticle
        isEmphasized
      >
        <div
          dangerouslySetInnerHTML={{
            __html: aboutBody.childMarkdownRemark.html,
          }}
        />

        <Box
          as="small"
          fontSize={1}
          style={{ display: 'block', lineHeight: 1.5 }}
        >
          WIP note: Dark mode toggle disabled until I have more time to
          implement a{' '}
          <a href="https://joshwcomeau.com/gatsby/dark-mode/">proper</a> theme
          toggle that adhere's to user's preferences and is properly stored in
          local storage.
        </Box>
      </PageTitleSection>

      <Section id="posts" pl={[2, 3]}>
        <Grid gridColumn={'1 / span 1'} pb={3} pt={4} as="aside">
          <Position position="sticky" top={rem(72)}>
            <Flex justifyContent="center" fontSize={5}>
              <VerticalText as="a" href={workSectionCtaHref}>
                {workSectionCtaText}
                <Box as="span" mt={2}>
                  <ChevronDown />
                </Box>
              </VerticalText>
            </Flex>
          </Position>
        </Grid>
        <Grid gridColumn={'2 / span 7'} pt={4} as="section">
          <CardList>
            {posts.map(({ node: post }) => (
              <PostCard key={post.id} {...post} />
            ))}
          </CardList>
        </Grid>
      </Section>

      <Section id="work">
        <Grid gridColumn={'1 / span 8'} mx={[-5, 0]}>
          <WorkCardList>
            {works.map(({ node: post }) => (
              <Fragment key={post.id}>
                <WorkCard {...post} />
              </Fragment>
            ))}
          </WorkCardList>
        </Grid>
      </Section>
    </Layout>
  )
}

export const postsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulWork(
      sort: { fields: [publishDate], order: DESC }
      limit: 18
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
              excerpt(pruneLength: 180)
            }
          }
        }
      }
    }
    contentfulHomePage {
      preHeading
      heading
      workSectionCtaHref
      workSectionCtaText
      aboutBody {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Index
