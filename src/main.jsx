import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./hover-min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/others/About";
import Contact from "./Pages/others/Contact";
import AuthProvider from "./AuthProvider/AuthProvider";
import Dashboard from "./layout/Dashboard";
import AddTask from "./Dashboard/AddTask";
import DashHome from "./Dashboard/DashHome";
import PrivateRoute from "./Private route/PrivateRoute";
import MyTask from "./Dashboard/MyTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path:'/dashboard',
        element:<DashHome></DashHome>
      },
      {
        path: "/dashboard/:email/my-task",
        element: <MyTask></MyTask>,
      },
      {
        path: "/dashboard/:email/add-task",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
