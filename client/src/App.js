import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all components
import Username from "./Components/Username";
import Password from "./Components/password";
import PageNotFound from "./Components/PageNotFound";
import Rest from "./Components/Rest";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Recovery from "./Components/Recovery";

// root router
const router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register></Register>,
  },
  {
    path: "/Profile",
    element: <Profile></Profile>,
  },
  {
    path: "/Recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/*",
    element: <Rest></Rest>,
  },
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/Password",
    element: <Password></Password>,
  },
  {
    path: "/PageNotFound",
    element: <PageNotFound></PageNotFound>,
  },
]);
export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}
