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
              <div className="index-page-post">
                <div>
                  <h2>{data.allWordpressPost.edges[0].node.title}</h2>
                  <p>{data.allWordpressPost.edges[0].node.excerpt}</p>
                  <Link to={"/post/" + data.allWordpressPost.edges[0].node.slug}><button>Read More</button></Link>
                </div>
              </div>
              <div className="index-page-post" to={"/post/" + data.allWordpressPost.edges[1].node.slug}>
                <div>
                  <h2>{data.allWordpressPost.edges[1].node.title}</h2>
                  <p>{data.allWordpressPost.edges[1].node.excerpt}</p>
                  <Link to={"/post/" + data.allWordpressPost.edges[1].node.slug}><button>Read More</button></Link>
                </div>
              </div>
            </div>
          )}
        />
      </Layout>
    )
    
  }
}

export default IndexPage
