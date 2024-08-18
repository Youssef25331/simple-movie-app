import "./App.scss";
import MyNavbar from "./MyNavbar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <>
      <header>
        <MyNavbar theme={theme} />
      </header>
    </>
  );
}

export default App;
