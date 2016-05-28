import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import SearchResult from './pages/search.result.jsx';
import Map from './pages/map.jsx';
import NotFound from './pages/notFound.jsx';
import Alarm from './pages/alarm.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={ App }>
<<<<<<< HEAD
      <IndexRoute component={ Home }/>
      <Route path='home' component={ Home } />
      <Route path='search' component={ SearchResult } />
      <Route path='alarm' component= { Alarm }/>
      
      <Route path='*' component={NotFound}/>
=======
		<IndexRoute component={ Home }/>
		<Route path='home' component={ Home } />
		<Route path='search' component={ SearchResult } />
		<Route path='map' component={ Map } />

		<Route path='*' component={NotFound}/>
>>>>>>> master
    </Route>
  </Router>
);

export default routes;