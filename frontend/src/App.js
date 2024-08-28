import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Signup from "./extras/Signup";
import NewSignup from './extras/newSignup.js'
import Driver from './subpages/driverpage.js'
import Passenger from './subpages/passengerpage.js'
import Profile from "./components/Profile.js";
import TrustAndSafety from './subpages/trust&safety.js'
import { AuthProvider } from "./context/AuthContext.js";
import { DataProvider } from "./context/DataContext.js";
import Findaride from "./subpages/findaride.js";
import PostDrive from "./subpages/PostDrive.js";
import Instructions from './subpages/instructions.js'
import { Trips } from "./subpages/Trips.js";
function App() {

  return (
    <>
      <AuthProvider>
        <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/newuser" element={<NewSignup />}></Route>
          <Route path="/driver" element={<Driver />}></Route>
          <Route path="/passenger" element={<Passenger />}></Route>
          <Route path="/trustandsafety" element={<TrustAndSafety />}></Route>
          <Route path="/myprofile" element={<Profile />}></Route>
          <Route path="/find" element={<Findaride/>}></Route>
          <Route path="/post" element={<PostDrive/>}></Route>
          <Route path="/instructions" element={<Instructions/>}></Route>
          <Route path="/trip" element= {<Trips/>}></Route>
        </Routes>
        </BrowserRouter>
        </DataProvider>
      </AuthProvider>

    </>
  );
}

export default App;
