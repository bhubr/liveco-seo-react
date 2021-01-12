import React from 'react';

function BlogPost({ title, content }) {
  return (
    <article className="BlogPost">
      <h2>{title}</h2>
      <div>{content}</div>
    </article>
  );
}

export default BlogPost;
