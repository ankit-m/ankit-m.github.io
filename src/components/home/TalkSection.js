import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Badge from "../Badge";
import Card from "../Card";
import Icon from "../Icon";

import Section, {
  NextSection,
  PrevSection,
  SectionLeft,
  SectionRight,
} from "./Section";

function TalkingFigure(props) {
  return (
    <svg viewBox="0 0 255 325" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000">
        <g strokeWidth={8} transform="translate(33.401 4)">
          <circle cx={52} cy={52} r={52} />
          <path
            strokeLinecap="round"
            d="M90.707 40.662C84.302 26.094 75.96 17.753 65.684 15.639"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={8}
          d="M85.901 108v165M85.401 273c-21.635 3.022-34.598 18.689-38.889 47m0-.391h-10.11M87.707 273c21.43 3.032 34.27 18.75 38.519 47.154m0 0H136.4"
        />
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M86.995 172.538c-32.496 7.006-53.452-1.07-62.867-24.23"
          />
          <path
            strokeWidth={10}
            d="M24.128 148.308c-9.94 3.372-16.183.266-18.727-9.318"
          />
          <path
            strokeWidth={8}
            d="M24.91 148.308c3.32-5.336 3.32-10.772 0-16.308"
          />
        </g>
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M87.406 172.538c32.496 7.006 53.452-1.07 62.867-24.23"
          />
          <path
            strokeWidth={10}
            d="M150.273 148.308c9.94 3.372 16.183.266 18.727-9.318"
          />
          <path
            strokeWidth={8}
            d="M149.492 148.308c-3.321-5.336-3.321-10.772 0-16.308"
          />
        </g>
        <g transform="translate(182 93)">
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M33.5 72.76c2.244-36.094-3.254-56.66-16.496-61.695"
          />
          <rect
            width={13}
            height={9}
            x={3.5}
            y={3.5}
            fill="#000"
            rx={4.5}
            transform="rotate(24 10 8)"
          />
          <path strokeLinecap="round" strokeWidth={8} d="M0 73h69" />
          <path
            strokeLinecap="square"
            strokeWidth={8}
            d="M33.988 77.893V196.68"
          />
          <path
            strokeLinecap="round"
            strokeWidth={8}
            d="M13.986 228l20.002-26.629L52.909 228"
          />
        </g>
      </g>
    </svg>
  );
}

const TalkCardContent = styled.div`
  display: flex;
  align-items: center;

  time {
    margin-right: 8px;
  }
`;

const SuggestedTalks = styled.div`
  .card {
    margin-top: 16px;
  }
`;

export default function BlogSection() {
  return (
    <Section id="talks">
      <SectionLeft>
        <TalkingFigure height="320px" />
      </SectionLeft>
      <SectionRight>
        <h1 className="text-indigo accent-font">Talks</h1>
        <p>
          I like to talk 😅. Sometimes there are a few people listening. Here
          are some of my talks from various tech conferences -
        </p>
        <SuggestedTalks>
          <Link to="/talks#rest-to-graphql">
            <Card title="From REST to GraphQL" color="indigo">
              <TalkCardContent>
                <time dateTime="2020-11-18">
                  <Icon name="calendar" />
                  Feb 20, 2020
                </time>
                <Badge>GraphQL Asia 2020</Badge>
              </TalkCardContent>
            </Card>
          </Link>

          <Link to="/talks#secure-bff">
            <Card title="Building a secure Backend For Frontend" color="indigo">
              <TalkCardContent>
                <time dateTime="2020-11-18">
                  <Icon name="calendar" />
                  Oct 26, 2018
                </time>
                <Badge>JSFoo 2018</Badge>
              </TalkCardContent>
            </Card>
          </Link>

          <Link to="/talks#react-internals">
            <Card title="React Internals" color="indigo">
              <TalkCardContent>
                <time dateTime="2020-11-18">
                  <Icon name="calendar" />
                  Aug 18, 2018
                </time>
                <Badge>ReactFoo 2018</Badge>
              </TalkCardContent>
            </Card>
          </Link>
        </SuggestedTalks>
      </SectionRight>
      <PrevSection id="blog" />
      <NextSection id="comics" label="Comics" />
    </Section>
  );
}
