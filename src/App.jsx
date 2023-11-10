import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Form from "./pages/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Style.scss";
import SinglePage from "./components/SinglePage";
import Write from "./components/Write";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/post/:id",
        element: <SinglePage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
