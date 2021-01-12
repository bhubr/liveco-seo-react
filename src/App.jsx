import React from 'react';
import BlogPost from './components/BlogPost';
import './App.css';
import db from './db.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my development blog</h1>
      </header>

      {db.posts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default App;
