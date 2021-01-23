import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingRating from '../FeelingRating/FeelingRating';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import SubmitConfirm from '../SubmitConfirm/SubmitConfirm';
import SupportRating from '../SupportRating/SupportRating';
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating';
import Admin from '../Admin/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={FeelingRating} />
        <Route path="/support" component={SupportRating} />
        <Route path="/understanding" component={UnderstandingRating} />
        <Route path="/feedback" component={FeedbackForm} />
        <Route path="/review" component={ReviewInfo} />
        <Route path="/confirm" component={SubmitConfirm} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
