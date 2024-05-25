import React, { useEffect, useState } from "react";
//import axios from "axios";
import BlogsCard from "../BlogsCard";
import "./blogs.css";

const BlogsData = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogsData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     setBlogs(response.data.slice(0, 10));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching blog data:", error);
    //   });
    // fetch("/blogsData.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     //console.log(data);
    //     setBlogs(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching blog data:", error);
    //   });
  }, []);

  return (
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
          //   image={`https://via.placeholder.com/300x200?text=Image+${blog.id}`}
        />
      ))}
    </div>
  );
};

export default BlogsData;
