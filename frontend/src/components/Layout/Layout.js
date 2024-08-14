import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from 'react-helmet'
const Layout = ({ children,title,description,keyword,author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content={description}/>
        <meta name="keyword"  content={keyword}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
