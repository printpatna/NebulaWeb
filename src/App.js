import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  MapScreen,
  SinglePostScreen,
  ErrorScreen,
} from './screens';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <div className="App">
        <header className="App-header">
        </header>
      </div> */}
      <Switch>
        <Route path="/" exact component={MapScreen} />
        <Route path="/post/:id" exact component={SinglePostScreen} />
        <Route path="/channels/:channel_id/posts/:post_id" exact component={SinglePostScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
