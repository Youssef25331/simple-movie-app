import "./App.scss";
import HomePage from "./HomePage";
import { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Details from "./pages/Details";
import Search from "./pages/Search";

function App() {
  const [theme, setTheme] = useState("dark");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: (
        <h1>
          404 not found <br />
          <Link to="/">Click here to go back</Link>
        </h1>
      ),
    },
    {
      path: "/:category/:id",
      element: <Details />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return (
    <div className="app">
      <AppTheme.Provider value={[theme, setTheme]}>
        <MyNavbar />
        <RouterProvider router={router} />
      </AppTheme.Provider>
    </div>
  );
}
export const AppTheme = createContext();
export default App;
