
import * as React from 'react'
import { Link } from 'gatsby'

const pageStyles = {
    color: "#232119",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const headingStyles = {
    color: "#663399",
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
  }

const AboutPage = () => {

    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>About Me</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage