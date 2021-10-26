import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const navItems = [
  {
    label: "Home",
    key: "home",
    path: "/",
    className: "text-pink",
  },
  {
    label: "Blog",
    key: "blog",
    path: "/blog",
    className: "text-purple",
  },
  {
    label: "Talks",
    key: "talks",
    path: "/talks",

    className: "text-indigo",
  },
  // {
  //   label: "Comics",
  //   key: "comics",
  //   path: "/comics",
  //   className: "text-blue",
  // },
  // {
  //   label: "Food",
  //   key: "food",
  //   path: "/food",
  //   className: "text-teal",
  // },
  {
    label: "Consulting",
    key: "consulting",
    path: "/consulting",
    className: "text-green",
  },
];

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
    display: flex;
    align-items: center;
    margin: 0;
    letter-spacing: -1.5px;
    font-weight: var(--fontWeight-extrabold);
    font-size: 32px;
    text-transform: lowercase;
    text-decoration: none;

    .gatsby-image-wrapper {
      margin-right: var(--spacing-2);
      margin-bottom: -2px; // to visually align with lowercase

      img {
        border-radius: 50%;
      }
    }

    &:hover,
    &:active,
    &:visited {
      color: initial;
    }
  }

  nav {
    font-size: 22px;
    display: none;
    font-weight: var(--fontWeight-bold);

    a {
      margin-right: 1.2rem;
      letter-spacing: -0.5px;
      padding: 18px 0;
      text-transform: lowercase;
      text-decoration: none;

      &.active,
      &:hover {
        border-bottom: 3px solid;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

    @media (min-width: 572px) {
      display: block;
    }
  }
`;

export default function Header(props) {
  return (
    <HeaderWrapper className={`accent-font ${props.className || ""}`}>
      <Link className="site-title" to="/">
        <StaticImage
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/avatar.jpg"
          width={32}
          height={32}
          quality={95}
          alt="Twitter Profile"
        />
        ankit muchhala
      </Link>

      <nav>
        {navItems.map(item => (
          <Link
            className={`${item.className || ""} ${
              props.active === item.key ? "active" : ""
            }`}
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
