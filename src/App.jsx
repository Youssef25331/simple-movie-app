import "./App.scss";
import MyNavbar from "./MyNavbar";
import MainContent from "./MainContent";
import { useState, createContext } from "react";

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className="app">
      <AppTheme.Provider value={[theme, setTheme]}>
        <MyNavbar />
        <MainContent />
      </AppTheme.Provider>
    </div>
  );
}
export const AppTheme = createContext()
export default App;
