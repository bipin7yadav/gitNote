import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation,Footer } from "./components/index";
import { Home, FrontView, Login, SignUp, Label, Archive, Trash } from "./pages/index";
import RequireAuth from "./Authentication/requireAuth";
import {Error} from "./pages/404/error"
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<FrontView />} />
        <Route path="/home" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/archive" element={
            <Archive />
        } />
        <Route path="/Label" element={
            <Label />
          
        } />
        <Route path="/Trash" element={
            <Trash />
        } />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
