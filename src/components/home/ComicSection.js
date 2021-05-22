import React from 'react';
import styled from 'styled-components';
import Badge from '../Badge';

import Section, { NextSection, PrevSection, SectionLeft, SectionRight } from './Section';

function DrawingFigure(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 325" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        transform="translate(4 4)"
      >
        <g strokeWidth={8} transform="translate(.401)">
          <circle cx={52} cy={52} r={52} />
          <path
            strokeLinecap="round"
            d="M90.707 40.662C84.302 26.094 75.96 17.753 65.684 15.639"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={8}
          d="M52.901 104v165M52.401 269c-21.635 3.022-34.598 18.689-38.889 47m0-.391H3.402M54.707 269c21.43 3.032 34.27 18.75 38.519 47.154m0 0H103.4"
        />
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M54.406 184.538c32.496 7.006 53.452-1.07 62.867-24.23"
          />
          <path
            strokeWidth={10}
            d="M117.398 160.589c4.146-9.644 10.631-12.204 19.455-7.682"
          />
        </g>
        <path
          strokeLinecap="square"
          strokeWidth={6}
          d="M193.5 60.5l-54.5 195"
        />
        <path
          strokeLinecap="round"
          strokeWidth={6}
          d="M166.25 158.737v126.858"
        />
        <path
          strokeLinejoin="round"
          strokeWidth={6}
          d="M140.147 307v-21.405H190.5L191 307"
        />
        <circle cx={140} cy={313} r={6} strokeWidth={4} />
        <circle cx={191} cy={313} r={6} strokeWidth={4} />
        <path
          strokeLinecap="round"
          strokeWidth={3}
          d="M114.96 140.904l44.08 21.808"
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

export default function ComicSection() {
  return (
    <Section id='comics'>
      <SectionLeft>
        <DrawingFigure height='320px' />
      </SectionLeft>
      <SectionRight>
        <h1 className='text-blue accent-font'>Comics</h1>
        <p>
          No. I do not have a big easel where I contemplate and draw.
          I make small comic strips about things I see in my life and find funny.
        </p>
        <ComingSoon>Coming soon</ComingSoon>
      </SectionRight>
      <PrevSection id='talks' />
      <NextSection id='food' label='Food' />
    </Section>
  );
}
