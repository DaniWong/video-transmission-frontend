import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from './pages/security/login/LoginPage'
import PageNotFound from './pages/PageNotFound'
import VideoListPage from './pages/video/VideoListPage'
import VideoDetailPage from './pages/video/VideoDetailPage'

// funciona como middleware nos sirve para mantenerla sesin o bloquear las rutas
const PrivateRoute = ({ path, component, ...rest }) => {
  let storage = localStorage.getItem('storage')
  storage = JSON.parse(storage)
  if (storage && storage.user) {
    return <Route path={path} component={component} />
  } else {
    return <Redirect to={'/security/login'} {...rest} />
  }
}

export const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/video/:id" component={VideoDetailPage} />
      <PrivateRoute path="/video" component={VideoListPage} />
      <PrivateRoute path="*" component={PageNotFound} />
    </Switch>
  );
}

export const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/security/login" component={LoginPage} />
    </Switch>
  )
}
