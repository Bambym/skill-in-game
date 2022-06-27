import PageAccueil from "./components/accueil/PageAccueil";
import PageLogin from "./components/signIn/PageLogin";
import Profil from "./components/profil/Profil";
import Search from "./components/recherche/Search";
import PageGame from "./components/SearchContent/game/PageGame";
import AnnouceConsole from "./components/SearchContent/console/AnnouceConsole";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/SignUp";
import ContactContent from "./components/contact/ContactContent";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import PageLayout from "./components/accueil/PageLayout";
import PrivateRoute from "./components/PrivateRoute";
import AllAnnounces from "./components/SearchContent/announce/AllAnnounces";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCylvPNoY5qZtfrd-XEYFzJQ5WazpEpdos",
  authDomain: "skill-in-game.firebaseapp.com",
  projectId: "skill-in-game",
  storageBucket: "skill-in-game.appspot.com",
  messagingSenderId: "277893952578",
  appId: "1:277893952578:web:e55b3240ced48078bee9db",
  measurementId: "G-NNN79HF8MC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<PageAccueil />} />
            <Route path="/login" element={<PageLogin />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/profil"
              element={<PrivateRoute render={(uid) => <Profil uid={uid} />} />}
            />
            <Route
              path="/signUp/profil"
              element={<PrivateRoute render={(uid) => <Profil uid={uid} />} />}
            />
            <Route
              path="/search"
              element={<PrivateRoute render={(uid) =><Search uid={uid} />} />}
            />
            <Route
              path="search/game/:gameId"
              element={
                <PrivateRoute render={(uid) => <PageGame uid={uid} />} />
              }
            />
            <Route
              path="search/console/:consoleId"
              element={
                <PrivateRoute render={(uid) => <AnnouceConsole uid={uid} />} />
              }
            />
            <Route
              path="search/allAnnounces"
              element={
                <PrivateRoute render={(uid) => <AllAnnounces uid={uid} />} />
              }
            />
          <Route path="/formContact" element={<ContactContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
