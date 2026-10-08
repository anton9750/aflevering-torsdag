import styled from 'styled-components'
import { Container } from '../components/common/Container'

const Page = styled.main`
  padding: 70px 0;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Section = styled.section`
  max-width: 750px;
  margin-bottom: 30px;
`

const Heading = styled.h2`
  margin-bottom: 10px;
`

const Text = styled.p`
  line-height: 1.7;
  color: ${({ theme }) => theme.muted};
`

export function Terms() {
  return (
    <Page>
      <Container>
        <Title>Terms of Use</Title>

        <Section>
          <Heading>Introduction</Heading>
          <Text>
            By using TravelMate, you agree to these Terms of Use. Please read
            them carefully before using the website.
          </Text>
        </Section>

        <Section>
          <Heading>Using TravelMate</Heading>
          <Text>
            TravelMate provides information about countries, cities, and
            places to help users discover travel destinations. The information
            provided on the website is intended for general informational
            purposes.
          </Text>
        </Section>

        <Section>
          <Heading>Content</Heading>
          <Text>
            We aim to keep the information on TravelMate accurate and
            up-to-date, but we cannot guarantee that all information is
            complete, accurate, or current.
          </Text>
        </Section>

        <Section>
          <Heading>Acceptable Use</Heading>
          <Text>
            You agree not to misuse the website, interfere with its operation,
            or use the service for unlawful purposes.
          </Text>
        </Section>

        <Section>
          <Heading>Changes to These Terms</Heading>
          <Text>
            We may update these Terms of Use from time to time. Any changes
            will be reflected on this page.
          </Text>
        </Section>

        <Section>
          <Heading>Contact</Heading>
          <Text>
            If you have questions about these Terms of Use, please contact us
            through our Contact page.
          </Text>
        </Section>
      </Container>
    </Page>
  )
}