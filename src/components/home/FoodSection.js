import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';
import Card from '../Card';
import Icon from '../Icon';

import Section, { NextSection, PrevSection, SectionLeft, SectionRight } from './Section';

function CookingFigure(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 374" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000">
        <g strokeWidth={8} transform="translate(14.401 53)">
          <circle cx={52} cy={52} r={52} />
          <path
            strokeLinecap="round"
            d="M90.707 40.662C84.302 26.094 75.96 17.753 65.684 15.639"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={8}
          d="M66.901 157v165M66.401 322c-21.635 3.022-34.598 18.689-38.889 47m0-.391h-10.11M68.707 322c21.43 3.032 34.27 18.75 38.519 47.154m0 0H117.4"
        />
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M68.406 237.538c32.496 7.006 53.452-1.07 62.867-24.23"
          />
          <path
            strokeWidth={10}
            d="M131.273 213.308c9.94 3.372 16.183.266 18.727-9.318"
          />
          <path
            strokeWidth={8}
            d="M130.492 213.308c-3.321-5.336-3.321-10.772 0-16.308"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={10}
          d="M112.314 181.326c26.42 14.883 53.453 14.883 81.1 0"
        />
        <path
          strokeLinecap="round"
          strokeWidth={5}
          d="M148.864 171.895c-8.07-3.02-9.024-11.303-2.864-24.848 6.16-13.544 7.115-23.596 2.864-30.155"
        />
        <path
          strokeLinecap="round"
          strokeWidth={3}
          d="M166.864 164.004c-8.07-3.021-9.024-11.304-2.864-24.849 6.16-13.544 7.115-23.596 2.864-30.155"
        />
        <path
          strokeLinejoin="round"
          strokeWidth={3}
          d="M14.401 41.181l13.145 15.47 23.08-9.796-1.366-18.918c1.869-1.503 3.478-4.256 4.827-8.258C56.11 13.675 52.075 7.01 45.62 6.058c-4.303-.635-8.155 1.645-11.554 6.841C30.93 3.152 25.898-.25 18.973 2.688c-6.925 2.94-7.685 9.38-2.28 19.322-7.267-4.588-12.022-2.612-14.265 5.927-2.243 8.54 1.748 12.954 11.973 13.244z"
        />
        <path
          fill="#000"
          d="M21.21 48.768l28.629-10.96.787 9.047-23.08 9.797z"
        />
        <path
          strokeLinecap="round"
          strokeWidth={2}
          d="M10.479 26.314c-2.202 1.919-2.414 3.933-.635 6.042"
        />
      </g>
    </svg>
  );
}

const ComingSoon = styled(Badge)`
  font-size: 1em;
  line-height: 1.5em;
  height: auto;
  margin-top: 2em;
`;

export default function FoodSection() {
  return (
    <Section id='food'>
      <SectionLeft>
        <CookingFigure height='320px' />
      </SectionLeft>
      <SectionRight>
        <h1 className='text-teal accent-font'>Food</h1>
        <p>
          Given an option between cooking an eating, I would go for the latter.
          I <strong>love</strong> eating food. I will post photos, videos, recipes
          and reviews of things I eat.
        </p>
        <ComingSoon>Coming soon</ComingSoon>
      </SectionRight>
      <PrevSection id='comics' />
      <NextSection id='consulting' label='Consulting' />
    </Section>
  );
}
