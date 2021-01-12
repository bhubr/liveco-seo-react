import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import db from '../db.json';

function BlogPostDetails() {
  // on ferait un appel API vers le backend pour récupérer un article via son slug
  const { slug } = useParams();
  // récupérer le bon post dans le tableau
  const post = db.posts.find((p) => p.slug === slug);
  return (
    <article className="BlogPostDetails">
      <Helmet>
        <title>LiveCoding SEO - {post.title}</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
    </article>
  );
}

export default BlogPostDetails;
