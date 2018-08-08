import React, { Component } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Layout from '../layouts/'

class IndexPage extends Component {
  render () {
    return (
      <Layout>
        <StaticQuery
          query={graphql`
            query allIndexData {
              allWordpressPost {
                edges {
                  node {
                    title
                    slug
                    content
                    excerpt
                  }
                }
              }
            } 
          `}
          render={data => ( // return
            <div className="index-page">
              <h1>Blog Posts</h1>
              <Link className="index-page-post" to={"/post/" + data.allWordpressPost.edges[0].node.slug}>
                <div>
                  <h2>{data.allWordpressPost.edges[0].node.title}</h2>
                  <p>{data.allWordpressPost.edges[0].node.excerpt}</p>
                </div>
              </Link>
              <Link className="index-page-post" to={"/post/" + data.allWordpressPost.edges[1].node.slug}>
                <div>
                  <h2>{data.allWordpressPost.edges[1].node.title}</h2>
                  <p>{data.allWordpressPost.edges[1].node.excerpt}</p>
                </div>
              </Link>
            </div>
          )}
        />
      </Layout>
    )
    
  }
}

export default IndexPage
