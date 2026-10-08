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

export function PrivacyPage() {
  return (
    <Page>
      <Container>
        <Title>Privacy Policy</Title>

        <Section>
          <Heading>Introduction</Heading>
          <Text>
            At TravelMate, we respect your privacy and are committed to
            protecting your personal information.
          </Text>
        </Section>

        <Section>
          <Heading>Information We Collect</Heading>
          <Text>
            TravelMate may collect information that you provide when using
            the website, such as information submitted through contact forms.
          </Text>
        </Section>

        <Section>
          <Heading>How We Use Your Information</Heading>
          <Text>
            We use information to operate, maintain, and improve TravelMate
            and to provide a better experience for our users.
          </Text>
        </Section>

        <Section>
          <Heading>Contact</Heading>
          <Text>
            If you have questions about this Privacy Policy, please contact
            us through our Contact page.
          </Text>
        </Section>
      </Container>
    </Page>
  )
}