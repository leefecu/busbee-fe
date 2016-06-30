import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import SearchResult from './pages/search.result.jsx';
import StopResult from './pages/stop.result.jsx';
import Map from './pages/map.jsx';
import Favorite from './pages/favorite.jsx';
import NotFound from './pages/notFound.jsx';
import Alarm from './pages/alarm.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route name="dashboard" path='home' component={ Home } />
      <Route name="dashboard-child" path="search/:saerchVal" component={SearchResult}/>
      <Route name="dashboard" path='alarm' component= { Alarm }/>
      <Route name="dashboard" path='map' component={ Map } />
      <Route name="dashboard" path='stop.result' component={ StopResult } />
      <Route name="dashboard" path='favorite' component={ Favorite } />
      <Route name="dashboard" path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;