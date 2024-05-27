import BlogsCard from "../BlogsCard";
import "./blogs.css";

const BlogsData = ({ blogs }) => {
  return (
    <>
      <h2 className="heading">Latest Posts . . .</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogsCard
            key={blog.id}
            id={blog.id}
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
