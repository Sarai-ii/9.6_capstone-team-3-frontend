// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

/* Import all page components here  */
// PAGES
import Account from './pages/Account';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Gallery from './pages/Gallery';
import PageNotFound from "./pages/PageNotFound"; 
import Users from './pages/usersIndex';
import AllEvents from './pages/AllEvents';
import ProofPage from "./pages/ProofPage";
// import CurrentEvent from './pages/CurrentEvent';
// COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/PublicProfiles';
// import UserPictureForm from "./components/UserPictureForm"
import EventSignUp from "./components/EventSignup"
// import Header from './components/Header'
import MessageMatch from "./components/MessageMatch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Navbar />
        <main>
          {/* <Header/> */}
          <Routes>
            <Route path="/" element={ <Home />} />

            {/* <Route path="/about" element = { <About /> } /> */}
            {/* SINCE WE DON'T HAVE AN ABOUT PAGE YET, I AM ROUTING THIS HOME FOR NOW */}
            <Route path="/about" element = { <Home /> } />
            
            <Route path="/exchanges-proof" element = { <ProofPage />} />
            <Route path="/login" element={<Login />} />

            {/* USERS CURD NEW-SHOW-EDIT-INDEX*/}
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/create-profile" element={<CreateProfile />} /> */}
            <Route path="/profile/:userId" element={<Profile />} />

            <Route path="/account/:userId/edit" element={<Account />} />
            <Route path="/users/" element={<Users />} />

            {/* EVENTS CRUD NEW-SHOW-EDIT-INDEX*/}
            <Route path="/events" element={<AllEvents />} /> 
            {/* <Route path="/currentevent" element={<CurrentEvent />} /> */}

            {/* USER EVENTS NEW-SHOW-EDIT-INDEX*/}
            <Route path="/events/:eventId/register" element={<EventSignUp />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/match-message" element={ <MessageMatch /> } />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;