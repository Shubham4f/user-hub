import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    // BrowserRouter provides the routing context for the app
    <BrowserRouter>
    {/* Header component is displayed on every page */}
      <Header />
      {/* Routes component defines the different routes of the app */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* ThemeToggler component allows toggling between light and dark themes */}
      <ThemeToggler />
    </BrowserRouter>
  );
}

export default App;
