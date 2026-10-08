// Alle GROQ-queries samlet ét sted.
// Sproget sendes som GROQ-parameter ($language), så samme query virker for da, en osv.
// Struktur: Country ← CountryInfo → Language (samme for City og Attraction).
// Hvis der mangler en oversættelse, falder vi tilbage til dansk (da).

const FALLBACK_LANGUAGE = 'da'

// Henter ét felt fra Info-dokumentet der hører til det aktuelle dokument (^)
const localized = (
  infoType: 'countryInfo' | 'cityInfo' | 'attractionInfo',
  parentField: 'country' | 'city' | 'attraction',
  field: 'name' | 'description' | 'address',
) => {
  const info = (lang: string) =>
    `*[_type == "${infoType}" && ${parentField}._ref == ^._id && language->code == ${lang}][0].${field}`

  return `"${field}": coalesce(${info('$language')}, ${info(JSON.stringify(FALLBACK_LANGUAGE))})`
}

const countryText = `
  ${localized('countryInfo', 'country', 'name')},
  ${localized('countryInfo', 'country', 'description')}
`
const cityText = `
  ${localized('cityInfo', 'city', 'name')},
  ${localized('cityInfo', 'city', 'description')}
`
const attractionText = `
  ${localized('attractionInfo', 'attraction', 'name')},
  ${localized('attractionInfo', 'attraction', 'description')},
  ${localized('attractionInfo', 'attraction', 'address')}
`

const countryRef = `{ _id, ${countryText}, "slug": slug.current }`

const countryFields = `
  _id,
  countryCode,
  "slug": slug.current,
  ${countryText},
  "image": image.asset->url
`

const cityFields = `
  _id,
  "slug": slug.current,
  ${cityText},
  "image": image.asset->url,
  "country": country->${countryRef}
`

const attractionFields = `
  _id,
  "slug": slug.current,
  ${attractionText},
  "image": image.asset->url,
  "city": city->{
    _id,
    "slug": slug.current,
    ${cityText},
    "country": country->${countryRef}
  }
`

// ---------- Lister ----------
export const ALL_COUNTRIES = `*[_type == "country"]{ ${countryFields} }`
export const ALL_CITIES = `*[_type == "city"]{ ${cityFields} }`
export const ALL_ATTRACTIONS = `*[_type == "attraction"]{ ${attractionFields} }`

// ---------- Detaljer med relationer (slug sættes ind i queryen) ----------
export const countryBySlug = (slug: string) => `
  *[_type == "country" && slug.current == ${JSON.stringify(slug)}][0]{
    ${countryFields},
    "cities": *[_type == "city" && references(^._id)]{
      _id, "slug": slug.current, ${cityText}, "image": image.asset->url
    }
  }
`

export const cityBySlug = (slug: string) => `
  *[_type == "city" && slug.current == ${JSON.stringify(slug)}][0]{
    ${cityFields},
    "attractions": *[_type == "attraction" && references(^._id)]{
      _id, "slug": slug.current, ${attractionText}, "image": image.asset->url
    }
  }
`

export const attractionBySlug = (slug: string) => `
  *[_type == "attraction" && slug.current == ${JSON.stringify(slug)}][0]{
    ${attractionFields}
  }
`
