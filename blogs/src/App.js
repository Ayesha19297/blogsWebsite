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
import BlogsDetail from "./Components/BlogsDetail";
import "./App.css";

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="nav">
      {location.pathname === "/" ? (
        <Link className="link" to="/create">
          Create your own blog. <span>+</span>
        </Link>
      ) : (
        <Link className="link" to="/">
          Recent posts
        </Link>
      )}
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("blogPosts");

    if (localData) {
      setBlogs(JSON.parse(localData));
    } else {
      fetch("/blogsData.json")
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data);
          localStorage.setItem("blogPosts", JSON.stringify(data));
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }
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
          <Route path="/blog/:id" element={<BlogsDetail blogs={blogs} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
