import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Desktop from "./pages/Desktop";

function App() {
  return (
    <BrowserRouter basename="/bilal-app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/desktop" element={<Desktop />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
