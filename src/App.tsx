import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import { Layout } from './components/layout/Layout'

import { HomePage } from './pages/HomePage'

import { CountriesPage } from './pages/CountriesPage'
import { CountryDetailPage } from './pages/CountryDetailPage'

import { CitiesPage } from './pages/CitiesPage'
import { CityDetailPage } from './pages/CityDetailPage'

import { LocationsPage } from './pages/LocationsPage'
import { LocationDetailPage } from './pages/LocationDetailPage'

import { AboutPage } from './pages/aboutPage'
import { ContactPage } from './pages/contactPage'
import { PrivacyPage } from './pages/privacyPage'
import { Terms } from './pages/Termspage'

import { SearchPage } from './pages/searchPage'

export function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Search */}
        <Route
          path="/search"
          element={<SearchPage />}
        />

        {/* Countries */}
        <Route
          path="/countries"
          element={<CountriesPage />}
        />

        <Route
          path="/countries/:slug"
          element={<CountryDetailPage />}
        />

        {/* Cities */}
        <Route
          path="/cities"
          element={<CitiesPage />}
        />

        <Route
          path="/cities/:slug"
          element={<CityDetailPage />}
        />

        {/* Locations / Attractions */}
        <Route
          path="/locations"
          element={<LocationsPage />}
        />

        <Route
          path="/locations/:slug"
          element={<LocationDetailPage />}
        />

        {/* Information pages */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/privacy"
          element={<PrivacyPage />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
      </Routes>
    </Layout>
  )
}