import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Section, { NextSection, SectionLeft, SectionRight } from './Section';

function WavingFigure(props) {
  return (
    <svg viewBox="0 0 202 325" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000">
        <g strokeWidth={8} transform="translate(60.401 4)">
          <circle cx={52} cy={52} r={52} />
          <path
            strokeLinecap="round"
            d="M90.707 40.662C84.302 26.094 75.96 17.753 65.684 15.639"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={8}
          d="M112.901 108v165M112.401 273c-21.635 3.022-34.598 18.689-38.889 47m0-.391h-10.11M114.707 273c21.43 3.032 34.27 18.75 38.519 47.154m0 0H163.4"
        />
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M113.995 172.538c-32.496 7.006-53.452-1.07-62.867-24.23"
          />
          <path
            strokeWidth={10}
            d="M51.128 148.308c-9.94 3.372-16.183.266-18.727-9.318"
          />
          <path
            strokeWidth={8}
            d="M51.91 148.308c3.32-5.336 3.32-10.772 0-16.308"
          />
        </g>
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M114.807 171.462c32.497-7.006 53.452 1.07 62.867 24.23"
          />
          <path
            strokeWidth={10}
            d="M177.674 195.692c9.94-3.372 16.183-.266 18.727 9.318"
          />
          <path
            strokeWidth={8}
            d="M176.893 195.692c-3.321 5.336-3.321 10.772 0 16.308"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={6}
          d="M22.401 132c-12.667 6.23-19 16.23-19 30"
        />
        <path
          strokeLinecap="round"
          strokeWidth={4}
          d="M21.757 147.311c-10.39 9.861-13.482 21.27-9.28 34.225"
        />
      </g>
    </svg>
  );
}

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
  height: 32px;

  a {
    margin-right: 1rem;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;

  .gatsby-image-wrapper {
    margin-right: var(--spacing-4);

    img {
      border-radius: 50%;
    }
  }
`;

export default function HomeSection(props) {
  return (
    <Section id='home'>
      <SectionLeft>
        <WavingFigure height="320px" />
      </SectionLeft>
      <SectionRight>
        <p>Hi! I am</p>
        <h1 className='text-pink accent-font'>Ankit Muchhala</h1>
        <p>
          I build web products. Currently, helping Postman create an API platform 
          for over 15M users.
        </p>
        <SocialLinks>
          <a
            href='https://twitter.com/ankit_muchhala'
            rel='noreferrer noopener'
            target='_blank'
          >
            <StaticImage
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../../images/twitter-icon.png"
              width={32}
              height={32}
              quality={95}
              alt="Twitter Profile"
            />
          </a>
          <a
            href='https://github.com/ankit-m'
            rel='noreferrer noopener'
            target='_blank'
          >
            <StaticImage
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../../images/github-icon.png"
              width={32}
              height={32}
              quality={95}
              alt='Github profile page'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/ankitmuchhala'
            rel='noreferrer noopener'
            target='_blank'
          >
            <StaticImage
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../../images/linkedin-icon.png"
              width={32}
              height={32}
              quality={95}
              alt='LinkedIn profile page'
            />
          </a>
        </SocialLinks>
      </SectionRight>
      <NextSection id='blog' label='Blog' />
    </Section>
  );
}
