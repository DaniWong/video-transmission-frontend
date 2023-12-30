import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PrivateRoutes, PublicRoutes } from './Routes'

export default function AppRouter() {
  return (
    <Switch>
      <Route path="/security">
        <PublicRoutes/>
      </Route>
      <Route path="*">
          <PrivateRoutes/>
      </Route>
    </Switch>
  );
}