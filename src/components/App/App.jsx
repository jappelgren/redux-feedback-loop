import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/feelings" component={FeelingRating} />
        <Route path="/support" component={SupportRating} />
        <Route path="/understanding" component={UnderstandingRating} />
        <Route path="/feedback" component={FeedbackForm} />
        <Route path="/review" component={ReviewInfo} />
        <Route path="/confirm" component={SubmitConfirm} />
      </div>
    </Router>
  );
}

export default App;
