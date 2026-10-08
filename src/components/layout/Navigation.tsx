import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useLanguage } from '../../contexts/LanguageContext'
import { LANGUAGES } from '../../types'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  flex: 1;

  @media (max-width: 800px) {
    display: none;
  }
`

const LinkItem = styled(NavLink)`
  padding: 10px 17px;

  border-radius: 11px;

  color: ${({ theme }) => theme.text};

  font-size: 0.92rem;
  font-weight: 500;

  &.active {
    background: #e8f0ff;
    color: #c9d0db;
    font-weight: 700;
  }

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`

const LanguageButton = styled.button`
  padding: 10px 14px;

  border: none;
  border-radius: 11px;

  background: #eef4fd;

  cursor: pointer;

  font-weight: 600;
`

export function Navigation() {
  const {
    language,
    setLanguage,
    t,
  } = useLanguage()

  return (
    <>
      <Nav>
        <LinkItem to="/">
          {t('home')}
        </LinkItem>

        <LinkItem to="/countries">
          {t('countries')}
        </LinkItem>

        <LinkItem to="/cities">
          {t('cities')}
        </LinkItem>

        <LinkItem to="/locations">
          {t('places')}
        </LinkItem>

        <LinkItem to="/about">
          {t('about')}
        </LinkItem>
      </Nav>

      <LanguageButton
        onClick={() =>
          setLanguage(
            LANGUAGES[
              (LANGUAGES.indexOf(language) + 1) %
                LANGUAGES.length
            ],
          )
        }
      >
        🌐 {language.toUpperCase()} ⌄
      </LanguageButton>
    </>
  )
}