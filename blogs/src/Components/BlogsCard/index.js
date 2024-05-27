import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./card.css";

const BlogsCard = ({
  id,
  title,
  body,
  image,
  category,
  author,
  date,
  author_img,
  description,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="card" onClick={handleClick}>
      {/* <Link to={`/blog/${id}`}></Link> */}
      <img src={image} alt={title} />
      <div className="card-content">
        <p className="sub-title"> {category} </p>
        <h2 className="card-title">{title}</h2>
        {/* <p className="card-description">{body}</p> */}
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
