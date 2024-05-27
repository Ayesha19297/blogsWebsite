import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

const BlogEditor = ({ onSubmit, blogsLength }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [author, setAuthor] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Title and Content cannot be empty.");
      return;
    }

    const newPost = {
      userId: blogsLength + 1,
      id: Date.now(),
      category,
      title,
      body: content,
      image,
      link,
      comment_count: 0,
      author,
      author_img: authorImg,
      date,
    };

    onSubmit(newPost);
    setTitle("");
    setContent("");
    setCategory("");
    setImage("");
    setLink("");
    setAuthor("");
    setAuthorImg("");
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="blog-editor">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Article Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Image URL"
        value={authorImg}
        onChange={(e) => setAuthorImg(e.target.value)}
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleContentChange}
        modules={modules}
        formats={formats}
        placeholder="Create your blog post..."
      />
      <button onClick={handleSubmit}>Submit Blog</button>
    </div>
  );
};

export default BlogEditor;
