
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const PortfolioPage = () => {

    return (
        <Layout pageTitle="Portfolio ">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
           
            <p> here , i will post done and current project or learning progress </p>
      </Layout>
    )
}


export const Head = () => <Seo title="Portfolio" />
export default PortfolioPage