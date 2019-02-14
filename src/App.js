import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import axios from 'axios';

import './App.scss';
import Add from './components/Add';
import Edit from './components/Edit';
import List from './components/List';

export default class App extends Component {

  constructor(props) {
	super(props)
	this.state = {
		sess: null
	}
  }

  render() {
    return (
	 <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Tests</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              	<ul className="navbar-nav mr-auto">
			<li className="nav-item">
			  <Link to={'/add'} className="nav-link">Add</Link>
			</li>
			<li className="nav-item">
			  <Link to={'/list'} className="nav-link">List</Link>
			</li>
		</ul>
            </div>
		<div className="nav-item dropdown float-right">
			<a onClick={this.dropdown()} className="nav-link dropdown-toggle" href="#!">Menu</a>
			<div ref={i=>this.menu=i} className="dropdown-menu">
			  <a className="dropdown-item" href="#!">Stats</a>
			  <a className="dropdown-item" href="#!">Logout</a>
			</div>
		</div>
          </nav>
	  <br/>
          <Switch>
              <Route exact path='/add' render={(p) => <Add {...p} sess={this.state.sess} />} />
              <Route path='/edit/:id' render={(p) => <Edit {...p} sess={this.state.sess} />} />
              <Route path='/list' render={(p) => <List {...p} sess={this.state.sess} />} />
              <Route path='/' render={(p) => <List {...p} sess={this.state.sess} />} />
          </Switch>
        </div>
      </Router>
    );
  }

  dropdown = () => (e) => {
  	e.preventDefault()
	this.menu.classList.toggle('show')
  }
}
