import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SiteFooter from "./Components/SiteFooter";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <body>
        <Home />
      </body>
      <footer>
        <SiteFooter />
      </footer>
    </div>
  );
}

export default App;
