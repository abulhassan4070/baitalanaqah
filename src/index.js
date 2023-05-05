import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AdminLayout from './admin/index';
import AuthLayout from './auth/index';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/admin" component={AdminLayout} />
          {localStorage.getItem('token') ? (
            <Redirect from="/" to="/admin" />
          ) : (
            <Redirect from="/" to="/auth" />
          )}
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
