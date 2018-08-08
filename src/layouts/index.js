import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'

import './index.css'
import './user-styles.css'

class Layout extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={"Wordpress Headless CMS Starter"}
          meta={[
            { name: 'description', content: 'Wordpress Headless CMS Starter'},
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle="Wordpress Headless CMS Starter"/>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout