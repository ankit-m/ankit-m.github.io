import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Badge from "../Badge"
import Card from "../Card"
import Icon from "../Icon"

import Section, {
  NextSection,
  SectionLeft,
  SectionRight,
  PrevSection,
} from "./Section"

const ViewAllLink = styled(Link)`
  margin: 32px 0 16px 0;
  display: block;
  text-decoration: underline;
  color: var(--purple);
  cursor: pointer;

  &:hover {
    color: var(--purple-dark);
  }
`

function TypingFigure(props) {
  return (
    <svg viewBox="0 0 226 325" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000">
        <g strokeWidth={8} transform="translate(4.401 4)">
          <circle cx={52} cy={52} r={52} />
          <path
            strokeLinecap="round"
            d="M90.707 40.662C84.302 26.094 75.96 17.753 65.684 15.639"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={8}
          d="M56.901 108v165M56.401 273c-21.635 3.022-34.598 18.689-38.889 47m0-.391H7.402M58.707 273c21.43 3.032 34.27 18.75 38.519 47.154m0 0H107.4"
        />
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M58.807 165.462c9.35 10.58 17.382 16.927 24.094 19.038 11.803 3.713 33.692-7.306 38.773 5.192"
          />
          <path
            strokeWidth={10}
            d="M121.674 189.692c9.94-3.372 16.183-.266 18.727 9.318"
          />
          <path
            strokeWidth={8}
            d="M120.893 189.692c-3.321 5.336-3.321 10.772 0 16.308"
          />
        </g>
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M119.648 217.733h71.072l30.738-71.43M118.402 237H196.5m-39.049 0v67.416M141 321l16.451-16.584L170.553 321"
          />
          <path
            strokeWidth={4}
            d="M176 185l15.5-2.981M196.102 148l4.438 11.952M174 170l18.61 4.598M179 157l17.102 9.368"
          />
        </g>
      </g>
    </svg>
  )
}

const BlogCardContent = styled.div`
  display: flex;
  align-items: center;

  time {
    margin-right: 8px;
  }
`

const SuggestedBlogs = styled.div`
  .card {
    margin-top: 16px;
  }
`

export default function BlogSection(props) {
  return (
    <Section id="blog">
      <SectionLeft>
        <TypingFigure height="320px" />
      </SectionLeft>
      <SectionRight>
        <h1 className="text-purple accent-font">Blog</h1>
        <p>
          I write about product management, web development, books and anything
          else I find interesting. Here are a few reads -
        </p>
        <SuggestedBlogs>
          {props.blogs.map(blog => (
            <Link key={blog.id} to={`/blog${blog.slug}`}>
              <Card title={blog.title} color="purple">
                <BlogCardContent>
                  <time dateTime={blog.date}>
                    <Icon name="calendar" />
                    {new Date(blog.date).toDateString()}
                  </time>
                  {/* <Badge>Book Review</Badge> */}
                </BlogCardContent>
              </Card>
            </Link>
          ))}
        </SuggestedBlogs>
        <ViewAllLink to="/blog">View all blogs</ViewAllLink>
      </SectionRight>
      <PrevSection id="" />
      <NextSection id="talks" label="Talks" />
    </Section>
  )
}
