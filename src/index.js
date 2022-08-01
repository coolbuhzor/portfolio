import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLoader } from "react-spinners";

const App = lazy(() => import("./App"));
const ErrorBoundary = lazy(() => import("./components/Errorboundary"));
ReactDOM.render(
  <Suspense
    fallback={
      <div className="sweet-loading">
        <HashLoader size={100} color={"#53B2AC"} />
      </div>
    }
  >
    <ErrorBoundary>
      <Router>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
      </Router>
    </ErrorBoundary>
  </Suspense>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
