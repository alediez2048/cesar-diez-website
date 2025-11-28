import React, { useState, useEffect } from 'react';
import { posts } from '../data/posts';
import '../styles/components/Blog.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  // Lock body scroll when reading
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <section id="insights" className="section">
      <div className="container">
        <h2 className="type-gallery-header">Industry<br />Insights</h2>
        
        <div className="blog-grid">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="blog-item"
              onClick={() => setSelectedPost(post)}
            >
              <div className="blog-visual">
                <img src={post.image} alt={post.title} />
              </div>
              <span className="blog-category">{post.category}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <span className="read-more">Read Article</span>
            </article>
          ))}
        </div>

        {/* Reading Room Overlay */}
        {selectedPost && (
          <div className="reading-room-overlay">
            <button 
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPost(null);
              }}
            >
              Close [X]
            </button>
            
            <div className="reading-room-container">
              <header className="article-header">
                <div className="article-meta">
                  <span>{selectedPost.category}</span>
                  <span>{selectedPost.date}</span>
                </div>
                <h1 className="article-title">{selectedPost.title}</h1>
                {/* Hero image in reading room */}
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="article-hero-image"
                />
              </header>
              
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
