import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Form from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Style.scss";
import SinglePage from "./components/SinglePage";
import Write from "./components/Write";
import HomeComponent from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

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
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/blog",
        element: <HomeComponent />,
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
  {
    path: "/login",
    element: <Login />,
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
