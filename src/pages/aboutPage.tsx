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

export function AboutPage() {
  return (
    <Page>
      <Container>
        <Title>About TravelMate</Title>

        <Text>
          TravelMate helps you explore countries, cities, and interesting
          places around the world. Discover new destinations, learn more
          about them, and find inspiration for your next adventure.
        </Text>
      </Container>
    </Page>
  )
}