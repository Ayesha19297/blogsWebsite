import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = () => {
    onSubmit(content);
    setContent('');
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, {'list': 'bullet'}, { 'indent': '-1'}, { 'indent': '+1' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <div className="blog-editor">
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={modules}
        formats={formats}
        placeholder="Create your blog post..."
      />
      <button onClick={handleSubmit}>Submit Post</button>
    </div>
  );
};

export default BlogEditor;
