import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'

import HomeLayout from './components/layouts/home-layout';
import Home from './components/pages/home';
import Feedback from './components/pages/feedback';
import WebsiteFeedback from './components/pages/website-feedback';
import CenterFeedback from './components/pages/center-feedback';

const SellCar = React.lazy(() => import('./components/pages/sell-car'));
const SwapCar = React.lazy(() => import('./components/pages/swap-car'));
const Servicing = React.lazy(() => import('./components/pages/servicing'));
const About = React.lazy(() => import('./components/pages/about'));
const Dealer = React.lazy(() => import('./components/pages/become-a-dealer'));
const Import = React.lazy(() => import('./components/pages/import-car'));

const Buy = React.lazy(() => import('./components/pages/buy'));


const loading = () => <div className="row" style={{ height: '100vh' }}><div className="col-md-3 text-center mx-auto my-auto">Loading...</div></div>;

const App = () => {

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" component={HomeLayout(Home)} />
          <Route exact path="/sell" component={HomeLayout(SellCar)} />
          <Route exact path="/swap" component={HomeLayout(SwapCar)} />
          <Route exact path="/service" component={HomeLayout(Servicing)} />
          <Route exact path="/about" component={HomeLayout(About)} />
          <Route exact path="/dealer" component={HomeLayout(Dealer)} />
          <Route exact path="/import" component={HomeLayout(Import)} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/feedback/website" component={WebsiteFeedback} />
          <Route exact path="/feedback/center" component={CenterFeedback} />
          <Route exact path="/buy" component={HomeLayout(Buy)} />

          <Route component={HomeLayout(Home)} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App;
