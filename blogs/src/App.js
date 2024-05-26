// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import { useState, useEffect } from "react";
// import BlogsData from "./Components/Blogs";
// import "./App.css";
// import BlogEditor from "./Components/BlogEditor";

// const Navigation = () => {
//   const location = useLocation();
//   return (
//     <div className="nav">
//       {location.pathname === "/" ? (
//         <Link className="link" to="/create">
//           Create your own blog
//         </Link>
//       ) : (
//         <Link className="link" to="/">
//           Recent posts
//         </Link>
//       )}
//     </div>
//   );
// };

// function App() {
//   const [posts, setPosts] = useState(
//     () => JSON.parse(localStorage.getItem("blogPosts")) || []
//   );

//   useEffect(() => {
//     localStorage.setItem("blogPosts", JSON.stringify(posts));
//   }, [posts]);

//   const handleNewPost = (newPost) => {
//     const updatedPosts = [newPost, ...posts];
//     setPosts(updatedPosts);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<BlogsData posts={posts} />} />
//           <Route
//             path="/create"
//             element={<BlogEditor onSubmit={handleNewPost} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import BlogsData from "./Components/Blogs";
// import BlogEditor from "./Components/BlogEditor";
// //import CreatedBlogsData from "./Components/CreatedBlogsData";
// import "./App.css";

// const Navigation = () => {
//   const location = useLocation();
//   return (
//     <div className="nav">
//       {location.pathname === "/" ? (
//         <Link to="/create">Create your own blog</Link>
//       ) : (
//         <Link to="/">Recent posts</Link>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [blogs, setBlogs] = useState(() => {
//     const savedPosts = localStorage.getItem("blogPosts");
//     return savedPosts ? JSON.parse(savedPosts) : [];
//   });

//   useEffect(() => {
//     fetch("blogsData.json")
//       .then((response) => response.json())
//       .then((data) => setBlogs((prevBlogs) => [...data, ...prevBlogs]))
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//       });
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("blogPosts", JSON.stringify(blogs));
//   }, [blogs]);

//   const handleNewPost = (newPost) => {
//     const updatedPosts = [newPost, ...blogs];
//     setBlogs(updatedPosts);
//     localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <Routes>
//           <Route
//             path="/"
//             element={<BlogsData blogs={blogs} setBlogs={setBlogs} />}
//           />

//           <Route
//             path="/create"
//             element={
//               <BlogEditor onSubmit={handleNewPost} blogsLength={blogs.length} />
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import BlogsData from "./Components/Blogs";
import BlogEditor from "./Components/BlogEditor";
import "./App.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="nav">
      {location.pathname === "/" ? (
        <Link to="/create">Create your own blog</Link>
      ) : (
        <Link to="/">Recent posts</Link>
      )}
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    fetch("blogsData.json")
      .then((response) => response.json())
      .then((data) => {
        const mergedBlogs = [...data, ...blogs];
        setBlogs(mergedBlogs);
        localStorage.setItem("blogPosts", JSON.stringify(mergedBlogs));
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("blogPosts", JSON.stringify(blogs));
  }, []);

  const handleNewPost = (newPost) => {
    const updatedPosts = [newPost, ...blogs];
    setBlogs(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<BlogsData blogs={blogs} setBlogs={setBlogs} />}
          />
          <Route
            path="/create"
            element={
              <BlogEditor onSubmit={handleNewPost} blogsLength={blogs.length} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
