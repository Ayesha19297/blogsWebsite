import React from "react";
import "./card.css";

const BlogsCard = ({
  title,
  body,
  image,
  category,
  author,
  date,
  author_img,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <p className="sub-title"> {category} </p>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{body}</p>
        <div className="card-meta">
          <img src={author_img} alt={author} />
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
