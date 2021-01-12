import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import './App.css';
import db from './db.json';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>LiveCoding SEO</title>
      </Helmet>
      <header className="App-header">
        <h1>Welcome to my development blog</h1>
      </header>

      <Switch>
        <Route exact path="/">
          <BlogPostList posts={db.posts} />
        </Route>
        <Route path="/:slug">
          <BlogPostDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
