import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/home.module.css"

// step 2: destructure data
export default function Home() {
  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in kathmandu</p>
          <Link className="btn" to="/projects">
            My Protfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

// page query
// Adding dynamic data in pages
// step 1.
