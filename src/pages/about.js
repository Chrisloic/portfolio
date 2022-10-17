
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

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
        <Layout pageTitle="About ">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
           
            <p> here , i Will let you know a lit more about me , my motivations , my goals and hobbies . this is a portal in my life</p>
      </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage