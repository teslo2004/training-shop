import React from 'react';
import './blog.scss';
import { BlogCart } from './BlogCart/BlogCart';
import { BLOGS } from '../../data/data-blog';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-header">
        <div className="blog-title">
          <h2>LATEST FROM BLOG</h2>
        </div>
        <div className="blog-all">
          <Link to="/blog">see all</Link>
        </div>
      </div>
      <div className="blog-list">
        {BLOGS.map((blog) => (
          <BlogCart
            key={blog.id}
            image={blog.img}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};
