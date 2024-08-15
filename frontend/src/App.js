import { Routes, Route, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Signup from "./extras/Signup";
import NewSignup from './extras/newSignup.js'
import Driver from './subpages/driverpage.js'
import Passenger from './subpages/passengerpage.js'
import TrustAndSafety from './subpages/trust&safety.js'
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
        <Route path="/driver" element={<Driver/>}></Route>
        <Route path="/passenger" element={<Passenger/>}></Route>
        <Route path="/trustandsafety" element={<TrustAndSafety/>}></Route>
      </Routes>
    </>
  );
}

export default App;
