import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'

import HomeLayout from './components/layouts/home-layout';

const Home = React.lazy(() => import('./components/pages/home'));


const loading = () => <div className="row" style={{ height: '100vh' }}><div className="col-md-3 text-center mx-auto my-auto">Loading...</div></div>;

const App = () => {

  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" component={HomeLayout(Home)} />

          {/* <Route component={Home} /> */}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App;
