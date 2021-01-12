import React from 'react';
import BlogPost from './BlogPost';

function BlogPostList({ posts }) {
  return (
    <section>
    {posts.map((post) => (
      <BlogPost key={post.id} slug={post.slug} title={post.title} content={post.content} />
    ))}
    </section>
  );
}

export default BlogPostList;
