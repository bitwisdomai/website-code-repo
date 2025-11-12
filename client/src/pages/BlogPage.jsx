import React from "react";
import Banner from "../components/landing/Banner";
import NavBar from "../components/landing/NavBar";
import BlogHero from "../components/blog/BlogHero";
import BlogFeatured from "../components/blog/BlogFeatured";
import BlogGrid from "../components/blog/BlogGrid";
import Footer from "../components/landing/Footer";

const BlogPage = () => {
  return (
    <div>
      <Banner />
      <NavBar />
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <Footer />
    </div>
  );
};

export default BlogPage;
