import "./App.css";
import { Routes,Route } from "react-router-dom";
import {Navigation,Footer} from "./components/index";
import {Home,FrontView,Login,SignUp} from "./pages/index";

function App() {
  return (
    <div className="App">

      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<FrontView />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
