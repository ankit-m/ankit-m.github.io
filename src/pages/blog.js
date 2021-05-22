import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function BlogIndex ({ data, location }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} active='blog'>
      <SEO title='Blog' />

      <h1 className='accent-font'>Blog</h1>

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <article key={node.fields.slug}>
            <h3>
              <Link to={`/blog${node.fields.slug}`}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

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
        }
      }
    }
  }
`;
