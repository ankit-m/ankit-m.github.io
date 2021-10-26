import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostWrapper = styled.article`
  .publish-date {
    margin-bottom: 0;
  }
`;

const MarkdownWrapper = styled.section`
  color: var(--gray-900);

  p {
    margin-bottom: var(--spacing-5);
    margin-top: var(--spacing-5);
  }

  ul,
  ol {
    padding-left: var(--spacing-4);
    list-style-position: inside;
  }

  p,
  ul,
  li {
    color: var(--gray-700);
  }

  code {
    background-color: var(--gray-100);
    border-radius: 3px;
    padding: 0 4px;
  }

  pre {
    background-color: var(--gray-100);
    padding: 16px;
    overflow-x: auto;
    margin-left: -16px;
    margin-right: -16px;
    border-radius: 3px;
  }

  blockquote {
    border-left: 4px solid var(--gray-300);
    margin-left: 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    height: 2px;
    background-color: var(--gray-300);
    box-shadow: none;
  }

  figure {
    text-align: center;

    img {
      max-width: 640px;
      width: 100%;
    }

    figcaption {
      text-align: center;
      font-size: 0.8rem;
      margin: 8px 0;
      color: var(--gray-500);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: var(--spacing-6);
    margin-bottom: var(--spacing-3);
  }
`;

const BottomNavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 32px 0;

  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 16px;
  }
`;

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle} active="blog">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
      />
      <BlogPostWrapper
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p className="publish-date">{post.frontmatter.date}</p>
        </header>
        <MarkdownWrapper
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {/*<footer>
          <Bio />
        </footer>*/}
      </BlogPostWrapper>
      <BottomNavigationWrapper>
        {previous && (
          <Link to={`/blog${previous.fields.slug}`} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={`/blog${next.fields.slug}`} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </BottomNavigationWrapper>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          publicURL
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
