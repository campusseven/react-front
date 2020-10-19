import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";
import TodoStore from "./store/TodoStore";
import BookStore from "./store/BookStore";
import UserStore from "./store/UserStore";
//import SessionStore from "./store/SessionStore";

ReactDOM.render(
  <Provider todoStore={TodoStore} 
            bookStore={BookStore}
            userStore={UserStore}>
      <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
