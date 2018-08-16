import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Nav from '../components/nav';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'This is William Winberg\'s portfolio' },
        { name: 'keywords', content: 'winberg, william, developer, react, gatsby, blog' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Nav />
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
