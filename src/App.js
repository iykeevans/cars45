import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'

import HomeLayout from './components/layouts/home-layout';
import Home from './components/pages/home';
import Feedback from './components/pages/feedback';
import WebsiteFeedback from './components/pages/website-feedback';
import CenterFeedback from './components/pages/center-feedback';


const Buy = React.lazy(() => import('./components/pages/buy'));
const Cardetails = React.lazy(() => import('./components/pages/car-details'));


const loading = () => <div className="row" style={{ height: '100vh' }}><div className="col-md-3 text-center mx-auto my-auto">Loading...</div></div>;

const App = () => {

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" component={HomeLayout(Home)} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/feedback/website" component={WebsiteFeedback} />
          <Route exact path="/feedback/center" component={CenterFeedback} />
          <Route exact path="/buy" component={HomeLayout(Buy)} />
          <Route exact path="/buy/car/:id" component={HomeLayout(Cardetails)} />

          <Route component={HomeLayout(Home)} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App;
