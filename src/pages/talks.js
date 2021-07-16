import React, { useEffect } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Seo from "../components/seo";

const TalksContainer = styled.article`
  h4 {
    color: var(--indigo);

    &:first-of-type {
      margin-top: var(--spacing-6);
    }
  }

  ol {
    list-style-position: inside;
    margin-left: var(--spacing-4);
  }

  table {
    margin-top: var(--spacing-6);
  }

  table,
  tr,
  td {
    border: 1px solid var(--gray-300);
  }

  tr,
  td {
    padding: var(--spacing-2);
  }
`;

export default function Talks({ location }) {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash);

      el && el.scrollIntoView(false);
    }
  }, []);

  return (
    <Layout location={location} active="talks">
      <Seo title="Talks" />

      <h1 className="accent-font">Talks</h1>

      <TalksContainer>
        <section id="rest-to-graphql">
          <h4>From REST to GraphQL</h4>
          <p>
            Everyone says it is easy to layer GraphQL on top of REST. Is it
            really? There are fundamental changes in thought processes which are
            often neglected, leading to poor schema design. This talk presents a
            structured approach to thinking in GraphQL and designing user
            centric schemas. The primary goal of the talk is to present a
            structured approach to thinking in GraphQL with something I like to
            call "Activities To Be Done (ATBDs)". I highlight a stepwise process
            to design a truly "graph-based" schema. We will also see how this
            approach helps various personas and facilitates in identifying
            "control points" for a schema.
          </p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ntgMQxFi0KQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <table>
            <tbody>
              <tr>
                <td>Conference</td>
                <td>GraphQL Asia 2020</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Feb 20, 2020</td>
              </tr>
              <tr>
                <td>Slides</td>
                <td>
                  <a
                    href="https://github.com/ankit-m/talks/tree/master/reactfoo-2018"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ankit-m/talks/tree/master/reactfoo-2018
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="secure-bff">
          <h4>Building a secure Backend For Frontend</h4>
          <p>
            Introduce audience to security implications while writing
            application code for public facing gateway services. The talk will
            not be a tutorial on security best practices. Instead, it will focus
            on building an understanding for developing secure applications and
            outline ways to do so Key takeaways:
            <ol>
              <li>How to build secure APIs</li>
              <li>
                Understand security challenges while building a BFF (Backend For
                Frontend)
              </li>
              <li>Security as a part of development</li>
            </ol>
          </p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JexwKAlbJ6o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <table>
            <tbody>
              <tr>
                <td>Conference</td>
                <td>JSFoo 2018</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Oct 26, 2018</td>
              </tr>
              <tr>
                <td>Slides</td>
                <td>
                  <a
                    href="https://github.com/ankit-m/talks/tree/master/jsfoo-2018"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ankit-m/talks/tree/master/jsfoo-2018
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="react-internals">
          <h4>React Internals</h4>
          <p>
            We all know React is fast, it uses VDOM, it provides lifecycle
            methods and what not. But what is VDOM? How does it make React fast?
            How does it optimize changes? Why do I need to use setState? This
            talk aims to answer such questions about the internal workings of
            React. Following topics are covered -
            <ol>
              <li>
                React Philosophy: Understanding the core principles can help us
                understand why certain decisions were taken and what are the
                best use cases for React
              </li>
              <li>
                Internal structure: High level overview of internal react
                modules and their function. This provides a mental map of where
                things fit in.
              </li>
              <li>
                Stack Reconciler: Understanding the old reconciliation process,
                its implementation and limitations.
              </li>
              <li>
                Fiber Reconciler: Deep dive into the implementation and
                benefits. Understanding the underlying computer science problems
                in both reconcilers.
              </li>
            </ol>
            The aim is not to teach how React is implemented but to give the
            audience a peek into internal workings of React which will help them
            write better code, which takes advantage of the same. It will also
            help them understand the reasons behind common dos and don'ts.
            Lastly, it would help audience appreciate the simplicity of the
            solution to a complex UI problem.
          </p>

          <table>
            <tbody>
              <tr>
                <td>Conference</td>
                <td>ReactFoo 2018</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Aug 18, 2018</td>
              </tr>
              <tr>
                <td>Slides</td>
                <td>
                  <a
                    href="https://github.com/ankit-m/talks/tree/master/reactfoo-2018"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/ankit-m/talks/tree/master/reactfoo-2018
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </TalksContainer>
    </Layout>
  );
}
