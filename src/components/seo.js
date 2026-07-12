/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({
  description,
  lang,
  meta,
  title,
  image,
  pathname,
  article,
  datePublished,
  noIndex,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, ``);
  const canonicalUrl = `${siteUrl}${pathname || `/`}`;
  const googleVerificationMeta = {
    name: "google-site-verification",
    content: "jo-QRBC3HrMVWJ5lMNZ78RcXqticphFNFA24MkTrPRE",
  };
  const imageMetaAttributes = !image
    ? []
    : [
        {
          property: "og:image",
          content: image,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          property: "og:image:alt",
          content: title,
        },
      ];
  const articleMetaAttributes = !article
    ? []
    : [
        { property: `article:author`, content: `Ankit Muchhala` },
        ...(datePublished
          ? [{ property: `article:published_time`, content: datePublished }]
          : []),
      ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={[{ rel: `canonical`, href: canonicalUrl }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: canonicalUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        googleVerificationMeta,
        ...(noIndex ? [{ name: `robots`, content: `noindex, follow` }] : []),
        ...articleMetaAttributes,
        ...imageMetaAttributes,
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  pathname: `/`,
  article: false,
  noIndex: false,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  datePublished: PropTypes.string,
  noIndex: PropTypes.bool,
  image: PropTypes.string,
};

export default Seo;
