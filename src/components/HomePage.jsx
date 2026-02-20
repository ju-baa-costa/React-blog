import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "../useFetch";

const HomePage = () => {
  const { data:blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="homePage">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All the blogs" />}
    </div>
  );
};

export default HomePage;
