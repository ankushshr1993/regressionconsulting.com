import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Services from './views/services'
import Approach from './views/approach'
import Proof from './views/proof'
import About from './views/about'
import Insights from './views/insights'
import InsightPost from './views/insight-post'
import Contact from './views/contact'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Services} exact path="/services" />
        <Route component={Approach} exact path="/approach" />
        <Route component={Proof} exact path="/proof" />
        <Route component={About} exact path="/about" />
        <Route component={Insights} exact path="/insights" />
        <Route component={InsightPost} exact path="/insights/:slug" />
        <Route component={Contact} exact path="/contact" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
