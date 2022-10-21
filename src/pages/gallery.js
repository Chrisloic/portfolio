import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const GalleryPage = () => {

    return (
        <Layout pageTitle="Gallery">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
           
            <p> Here , i will post some of my paints projects  and art </p>
      </Layout>
    )
}


export const Head = () => <Seo title="Gallery" />
export default GalleryPage