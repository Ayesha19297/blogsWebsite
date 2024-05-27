import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";

const BlogsDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id.toString() === id);

  console.log("blog details:", blog);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blogs-detail">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} />
      <p className="content">Created by : {blog.author}</p>
      <p className="content">Created on : {blog.date}</p>
      <p className="content">{blog.body}</p>
      <p className="content">{blog.description}</p>
    </div>
  );
};

export default BlogsDetail;
