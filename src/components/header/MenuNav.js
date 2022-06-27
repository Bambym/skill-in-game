import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignOut from "./SignOut";
const MenuNav = () => {
  const navigate = useNavigate();

  const auth = getAuth();
  let params = useParams();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const currentUser = user.uid;
        setAuthorized(true);
      } else {
        setAuthorized(false);
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link-1" aria-current="page">
            <Link to="/" style={{textDecoration: "inherit",color:"white"}}>ACCUEIL</Link>
          </a>
        </li>
        {authorized && (
          <>
            <li className="nav-item">
              <a className="nav-link-2">
                <Link to={`/profil`} style={{textDecoration: "inherit",color:"white"}}>PROFIL</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link-3">
                <Link to={`/search`} style={{textDecoration: "inherit",color:"white"}}>RECHERCHE</Link>
              </a>
            </li>
          </>
        )}
        <li className="nav-item">
          <a className="nav-link-4 "><Link to={`/formContact`} style={{textDecoration: "inherit",color:"white"}}>CONTACT</Link> </a>
        </li>
        {authorized && (
          <li className="nav-item">
           <SignOut/>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MenuNav;
