import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./components/routes/Bag.jsx";
import Home from "./components/routes/Home.jsx";
import "./App.css";
import { Provider } from "react-redux";
import myntraStore from "./components/redux-store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
