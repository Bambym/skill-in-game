import React from "react";
import { Link } from "react-router-dom";
import "../../css/footer/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="headFooter">
        <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi  bi-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>SKILL IN GAME
              </h6>
              <p>
                Trouvez les meilleurs partenaires pour vivre vos meilleurs
                moments de jeux.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Conditions Générales de Ventes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Conditions Générales d'Utilisations
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/profil" style={{ color: "white" }}>
                  Profil
                </Link>
              </p>
              <p>
                <Link to="/search" style={{ color: "white" }}>
                  Recherche
                </Link>
              </p>
              <p>
                <Link to="/formContact" style={{ color: "white" }}>
                  Contactez nous ?
                </Link>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> FRANCE, Savigny le Temple
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                ly.francois@hotmail.fr
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 06 66 46 69 98
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footerFooter">
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
