import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const navItems = [{
  label: 'Home',
  key: 'home',
  path: '/',
  className: 'text-pink'
}, {
  label: 'Blog',
  key: 'blog',
  path: '/blog',
  className: 'text-purple'
}, {
  label: 'Talks',
  key: 'talks',
  path: '/talks',

  className: 'text-indigo'
}, {
  label: 'Comics',
  key: 'comics',
  path: '/comics',
  className: 'text-blue'
}, {
  label: 'Food',
  key: 'food',
  path: '/food',
  className: 'text-teal'
}, {
  label: 'Consulting',
  key: 'consulting',
  path: '/consulting',
  className: 'text-green'
}];

const HeaderWrapper = styled.header`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 10;
  top: 0;
  box-shadow: 0 3px 3px var(--gray-300);

  .site-title {
    margin: 0;
    letter-spacing: -1.5px;
    font-weight: var(--fontWeight-extrabold);
    font-size: 32px;
    text-transform: lowercase;
    text-decoration: none;

    &:hover,
    &:active,
    &:visited {
      color: initial;
    }
  }

  nav {
    font-size: 22px;
    display: none;
    margin-right: 1rem;
    font-weight: var(--fontWeight-bold);

    a {
      margin-right: 1.5rem;
      letter-spacing: -0.5px;
      padding: 18px 0;
      text-transform: lowercase;
      text-decoration: none;

      &.active,
      &:hover {
        border-bottom: 3px solid;
      }
    }

    @media (min-width: 572px) {
      display: block;
    }
  }
`;

export default function Header(props) {
  return (
    <HeaderWrapper className={`accent-font ${props.className || ''}`}>
      <Link
        className='site-title'
        to='/'
      >
        ankit muchhala
      </Link>

      <nav>
        {navItems.map((item) => (
          <Link
            className={`${item.className || ''} ${props.active === item.key ? 'active' : ''}`}
            key={item.key}
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </HeaderWrapper>
  );
}
