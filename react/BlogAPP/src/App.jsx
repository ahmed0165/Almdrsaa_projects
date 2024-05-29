import React from "react";
import BlogHeader from "./components/BlogHeader";
import BlogPost from "./components/BlogPost";
import rectangle38 from "./assets/Rectangle 38.png";
import TraceyWilson from "./assets/Tracey Wilson.png";
import BlogList from "./components/BlogList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogPost/:textContent" element={<BlogPost />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="container mx-auto px-4 my-4 max-w-screen-lg">
    //   <BlogHeader />
    //   <BlogList />
    //   {/* <BlogPost
    //     category="Technology"
    //     textContent="The Impact of Technology on the Workplace: How Technology is Changing"
    //     authorName="TraceyWilson"
    //     date="August 20, 2022"
    //     authorImage={TraceyWilson}
    //     image={rectangle38}
    //   /> */}
    // </div>
  );
}
