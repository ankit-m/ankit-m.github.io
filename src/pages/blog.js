import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogListContainer = styled.article`
  padding: var(--spacing-4) 0;
  border-bottom: 1px solid var(--gray-300);

  &:first-of-type {
    padding-top: 0;
  }

  h4 {
    margin-top: 0;
    margin-bottom: var(--spacing-2);
    color: var(--purple);

    &:hover {
      color: var(--purple-dark);
    }
  }

  p {
    margin-bottom: 0;
    color: var(--gray-600);
  }

  .time-to-read {
    display: inline-block;
    padding-left: var(--spacing-2);
    margin-left: var(--spacing-2);
    border-left: 1px solid var(--gray-400);
  }
`

export default function BlogIndex({ data, location }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} active="blog">
      <Seo title="Blog" />

      <h1 className="accent-font">Blog</h1>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug

        return (
          <BlogListContainer key={node.fields.slug}>
            <Link to={`/blog${node.fields.slug}`}>
              <h4>{title}</h4>
            </Link>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
            <small>
              {node.frontmatter.date}
              <span className="time-to-read">{node.timeToRead} min read</span>
            </small>
          </BlogListContainer>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
