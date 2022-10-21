
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


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
           <p>👋🏽 Hi, my name is Christian,(you can call me Chris)</p>
           <p>🎓 Recently graduated with a degree in Computer Science: Software development and Technical support ( May 2022 )</p>
            <p>🌇 Montrealer, with a passion for sciences, technologies, art, and growing skills that will help you achieve your goals </p>
            <p>📚 During my years of studies: I had to learn Front and Back End agile development, networking, and Database Architecture. During my internship, I had the opportunity to learn, understand, and familiarise myself with Sharepoint and PowerApps. </p>
            <p>💻 For my future, I hope to work with a diverse team on a panel of projects allowing me to be a software Developer, a Power platform specialist, a business analyst, or a cloud engineer.</p>
            <p>🏔 In my free time, You can find me painting in my backyard, designing some Figma’s project, reading, or at go to the movie.</p>
            <p>💪🏽 I love to grow some side hustle skills such as UX design, E-Marketing, and data analytics.</p>
            <p> here , i Will let you know a lit more about me , my motivations , my goals and hobbies . this is a portal in my</p>
            </Layout>
    )
}


export const Head = () => <Seo title="About Me" />
export default AboutPage