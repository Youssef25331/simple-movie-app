import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-contaienr">
            <p className="logo">
              MovieDb
            </p>
          </div>
        </div>
      </header>
      <Carousel />
    </>
  );
}

export default App;
