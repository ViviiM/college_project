import { Routes, Route, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Signup from "./extras/Signup";
import NewSignup from './extras/newSignup.js'
function App() {
 
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/newuser" element={<NewSignup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
