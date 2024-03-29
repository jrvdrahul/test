import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Contact from './Contacts';
import ManageList from './ManageList';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'




ReactDOM.render(<Router >
<div>
	
	<Route exact path="/" component={App}/>
	<Route exact path="/manageList" component={ManageList}/>
	<Route path="/Contact" component={Contact}/>
	
</div>

</Router>
, document.getElementById('root'));
registerServiceWorker();
