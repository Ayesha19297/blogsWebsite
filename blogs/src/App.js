import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import BlogsData from "./Components/Blogs";
import "./App.css";
import BlogEditor from "./Components/BlogEditor";

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="nav">
      {location.pathname === "/" ? (
        <Link className="link" to="/create">Create your own blog</Link>
      ) : (
        <Link className="link" to="/">Recent posts</Link>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<BlogsData />} />
          <Route path="/create" element={<BlogEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
