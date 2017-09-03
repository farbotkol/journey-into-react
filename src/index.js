//==================
// Here we import the react component again and then
// the new dependencie reactdom that actually renders
// the application onto the screen.
//==================
import React from 'react';
import ReactDOM from 'react-dom';

//==================
// Now we replace our App component with the routes component
// and substitute it into the function below
//==================
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//==================
// This command actually renders the component into
// the element with the id #app which we added in
// the index.html file. Instead of serving the <app /> like we did previously
// we now serve the Router we defined in the router.js file. 
//==================
ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.querySelector('#app'));
