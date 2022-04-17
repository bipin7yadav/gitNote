import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation, Footer } from "./components/index";
import { Home, FrontView, Login, SignUp, Label, Archive, Trash } from "./pages/index";
function App() {
  return (
    <div className="App">
      {/* <h1>Money makes me happy</h1> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<FrontView />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/Label" element={<Label />} />
        <Route path="/Trash" element={<Trash />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
