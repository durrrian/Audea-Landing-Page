import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './Navbar/Navbar'
import Footer from './Footer/Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="App bg-blackPrimary h-full overflow-hidden">
        <Nav />

        {children}
        
        <Footer />
        

    </div>
  </div>
)

export default Layout
