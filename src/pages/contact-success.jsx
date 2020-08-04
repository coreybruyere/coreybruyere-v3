import React from 'react'
import Helmet from 'react-helmet'
import { Text } from 'rebass'

import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitleSection from '../components/PageTitleSection'
import SEO from '../components/SEO'

const ContactSuccess = () => {
  const postNode = {
    title: `Thanks for connecting - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${postNode.title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact-success" customTitle />

      <Container>
        <PageTitleSection id={`contact-success`} title={`Contact success`}>
          <Text>
            Thanks for connecting! Your message was sent my way and I'll be in
            touch <abbr title="as soon as possible">ASAP</abbr>.
          </Text>
          <Text>
            <a href="/">Back to my homepage</a>
          </Text>
        </PageTitleSection>
      </Container>
    </Layout>
  )
}

export default ContactSuccess
