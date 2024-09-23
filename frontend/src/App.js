import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from './context/ProtectedRoute.js'
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
import { UserProvider } from "./context/UserAuthContext.js";
import Driverlist from "./extras/driverlist.js";
function App() {

  return (
    <>
      <UserProvider>
        <AuthProvider>
          {/* <DataProvider> */}
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="*" element={<Pagenotfound />} />
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/newuser" element={<NewSignup />}></Route>
                <Route path="/driver" element={<Driver />}></Route>
                <Route path="/trustandsafety" element={<TrustAndSafety />}></Route>
                <Route path="/find" element={<Findaride />}></Route>
                {/* <Route path="/post" element={<PostDrive />}></Route> */}
                {/* <Route path="/instructions" element={<Instructions />}></Route> */}
                <Route path="/passenger" element={<Passenger />}></Route>
                {/* <Route path="/myprofile" element={<Profile/>}></Route> */}
                {/* <Route path="/trip" element={<Trips/>}></Route> */}
                {/* <Route path="/list" element={<Driverlist/>}></Route> */}
                 {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/post" element={<PostDrive />} />
                <Route path="/instructions" element={<Instructions />} />
                <Route path="/myprofile" element={<Profile />} />
                <Route path="/trip" element={<Trips />} />
                <Route path="/list" element={<Driverlist />} />
              </Route>

              </Routes>
            </Router>
          {/* </DataProvider> */}
        </AuthProvider>
      </UserProvider>

    </>
  );
}

export default App;
