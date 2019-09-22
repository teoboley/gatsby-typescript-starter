import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const IndexPage: React.FC<IIndexPageProps> = props => {
  const { siteName } = props.data.site.siteMetadata;
  return (
    <Layout>
      <h1>Hello TypeScript world!</h1>
      <p>
        This site is named <strong>{siteName}</strong>
      </p>
    </Layout>
  );
};

export default IndexPage;
