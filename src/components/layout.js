
import * as React from 'react'
import { Link ,useStaticQuery, graphql  } from 'gatsby'
import { container ,
  heading,
  navLinks,
  navLinkItem,
  siteTitle,
  navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)


  return (
    <div className={container}>
       <header className={siteTitle} >{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li  className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
          <li  className={navLinkItem}><Link to="/portfolio" className={navLinkText}>Portfolio</Link></li>
          <li  className={navLinkItem}><Link to="/gallery" className={navLinkText}>Gallery</Link></li>
          <li className={navLinkItem}><Link to="https://github.com/Chrisloic" className={navLinkText}>Github</Link></li>
           <li className={navLinkItem}><Link to="https://linkedin.com/in/christianatf" className={navLinkText}>LinkedIn</Link></li>
           <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog </Link> </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle} </h1>
        {children}
      </main>
      
    </div>
    
    
    
  )
}

export default Layout