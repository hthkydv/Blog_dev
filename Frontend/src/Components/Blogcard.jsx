import React from 'react';

const BlogCard = ({ title, image, tags, description, author }) => {
  console.log({ title, image, tags, description, author }); // Debugging

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 text-sm text-gray-600">
        Posted by {author}
      </div>
    </div>
  );
};

export default BlogCard;
