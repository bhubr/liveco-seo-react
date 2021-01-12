import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ slug, title, content }) {
  return (
    <article className="BlogPost">
      <h2>{title}</h2>
      <div>{content.substr(0, 10)}</div>
      <Link
        to={`/${slug}`}
      >
        Read more
      </Link>
    </article>
  );
}

export default BlogPost;
