import React from 'react';
import { graphql } from 'gatsby';

import HomeSection from '../components/home/HomeSection';
import BlogSection from '../components/home/BlogSection';
import TalkSection from '../components/home/TalkSection';
import Layout from '../components/layout';
import ComicSection from '../components/home/ComicSection';
import FoodSection from '../components/home/FoodSection';
import ConsultingSection from '../components/home/ConsultingSection';

const BlogIndex = ({ data, location }) => {
  const blogs = data.allMarkdownRemark.edges.map((d) => ({
    id: d.node.id,
    title: d.node.frontmatter.title,
    date: d.node.frontmatter.date,
    slug: d.node.fields.slug
  }));

  return (
    <Layout active='home' location={location}>
      <HomeSection
        // twitterImg={data.twitter.childImageSharp.fixed}
        // linkedinImg={data.linkedin.childImageSharp.fixed}
        // githubImg={data.github.childImageSharp.fixed}
      />
      <BlogSection blogs={blogs} />
      <TalkSection />
      <ComicSection />
      <FoodSection />
      <ConsultingSection />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
