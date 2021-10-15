import react from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory, Link, useLocation } from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home';
import Why from './components/pages/why';
import How from './components/pages/how';
import Resources from './components/pages/resources';
import AboutUs from './components/pages/about-us';
import NotFoundError from './components/pages/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/why" exact component={Why}></Route>
          <Route path="/how" exact component={How}></Route>
          <Route path="/resoures" exact component={Resources}></Route>
          <Route path="/about-us" exact component={AboutUs}></Route>
          <Route path="*" exact component={NotFoundError}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
