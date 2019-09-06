import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Pages/login'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

const name = 'Po Kit';
const element = <h1>Hello {name}</h1>;

ReactDOM.render(
    // <Router>
    //     <Route path="/login" exact component={Login} />
    // </Router>,
    // <Login />,
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
