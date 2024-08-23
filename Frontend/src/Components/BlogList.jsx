import React, { useEffect, useState } from 'react';
import BlogCard from './Blogcard'; // Ensure the path is correct

const BlogList = () => {
  console.log('BlogList component rendered'); // Debugging

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched blogs:', data); // Debugging
        setBlogs(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            image={blog.image}
            tags={blog.tags}
            description={blog.description}
            author={blog.author}
          />
        ))
      )}
    </div>
  );
};

export default BlogList;
