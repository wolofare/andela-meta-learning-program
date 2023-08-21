import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Root from "./routes/root.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import Contact from "./routes/contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
