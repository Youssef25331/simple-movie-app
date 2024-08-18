import "./App.scss";
import MyNavbar from "./MyNavbar";
import MainContent from "./MainContent";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className="app">
      <MyNavbar theme={theme} />
      <MainContent theme={theme} />
    </div>
  );
}

export default App;
