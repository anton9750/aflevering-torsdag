import { useSearchParams } from 'react-router-dom'

import { Container } from '../components/common/Container'
import { SearchBar } from '../components/common/SearchBar'
import { SearchResults } from '../components/home/SearchResults'

import { useAttractionsGroq } from '../hooks/useAttractionsGroq'
import { useCitiesGroq } from '../hooks/useCitiesGroq'
import { useCountriesGroq } from '../hooks/useCountriesGroq'

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''

  const countries = useCountriesGroq()
  const cities = useCitiesGroq()
  const places = useAttractionsGroq()

  return (
    <main>
      <Container style={{ paddingTop: 32 }}>
        {/* Søgefelt på resultatsiden: resultater opdateres mens man skriver */}
        <SearchBar
          value={query}
          onChange={(value) =>
            setSearchParams(value ? { q: value } : {}, { replace: true })
          }
        />
      </Container>

      <SearchResults
        query={query}
        countries={countries.data ?? []}
        cities={cities.data ?? []}
        places={places.data ?? []}
      />
    </main>
  )
}
