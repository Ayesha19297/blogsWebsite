import BlogsData from "./Components/Blogs";
import "./App.css";
import BlogEditor from "./Components/BlogEditor";

//https://json-placeholder.mock.beeceptor.com/posts
function App() {
  return (
    <div className="App">
      <BlogsData />
      <BlogEditor />
    </div>
  );
}

export default App;
