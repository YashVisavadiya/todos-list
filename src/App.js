import "./App.css";
import { About } from "./Components/About";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Todos from "./Components/Todos";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header title="Todo List" searchBar={false} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Todos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
