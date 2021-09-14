import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

function projects({ data }) {
  console.log("data>>", data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div>
        <h2>Portfolio</h2>
        <h3>Projects & Websites i've Created</h3>
        <div>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default projects

// export page query
export const query = graphql`
  query ProjectPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`
