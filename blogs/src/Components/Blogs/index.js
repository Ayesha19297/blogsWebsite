import React, { useEffect, useState } from "react";
//import axios from "axios";
import BlogsCard from "../BlogsCard";
import "./blogs.css";

const BlogsData = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogsData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  return (
    <>
      <h2>Recent Posts</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogsCard
            key={blog.id}
            category={blog.category}
            title={blog.title}
            body={blog.body}
            image={blog.image}
            author={blog.author}
            date={blog.date}
            author_img={blog.author_img}
          />
        ))}
      </div>
    </>
  );
};

export default BlogsData;
