import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Details from "./pages/Details/Details";
import Search from "./pages/Search/Search";
import "./App.scss";
export const AppTheme = createContext();

function Layout() {
  return (
    <div>
      <MyNavbar />
      <Outlet />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:category/:id",
          element: <Details />,
        },
        {
          path: "/search/:type",
          element: <Search />,
        },
        {
          path: "*",
          element: (
            <h1>
              404 not found <br />
              <Link to="/">Click here to go back</Link>
            </h1>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <AppTheme.Provider value={[theme, setTheme]}>
        <RouterProvider router={router} />
      </AppTheme.Provider>
    </div>
  );
}

export default App;
