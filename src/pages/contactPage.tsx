import styled from 'styled-components'
import { Container } from '../components/common/Container'

const Page = styled.main`
  padding: 70px 0;
`

const Title = styled.h1`
  margin-bottom: 20px;
`

const Text = styled.p`
  max-width: 700px;
  line-height: 1.7;
  color: ${({ theme }) => theme.muted};
`

const Email = styled.a`
  display: inline-block;
  margin-top: 20px;
`

export function ContactPage() {
  return (
    <Page>
      <Container>
        <Title>Contact Us</Title>

        <Text>
          Have a question, suggestion, or feedback about TravelMate?
          We'd love to hear from you.
        </Text>

        <Email href="mailto:hello@travelmate.com">
          hello@travelmate.com
        </Email>
      </Container>
    </Page>
  )
}