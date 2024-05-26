// import React, { useEffect, useState } from "react";
// import CreatedBlogsCard from "../CreatedBlogsCard";
// import "./data.css";

// const CreatedBlogsData = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
//     setPosts(storedPosts);
//   }, []);

//   return (
//     <div className="blogs-grid">
//       {posts.map((post, index) => (
//         <CreatedBlogsCard key={index} post={post} />
//       ))}
//     </div>
//   );
// };

// export default CreatedBlogsData;

// import React from "react";
// import CreatedBlogsCard from "./CreatedBlogsCard";
// import "./data.css";

// const CreatedBlogsData = ({ posts }) => {
//   return (
//     <div className="blogs-grid">
//       {posts.map((post) => (
//         <CreatedBlogsCard key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default CreatedBlogsData;
