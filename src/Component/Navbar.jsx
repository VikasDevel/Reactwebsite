import React from 'react';
import "./Navbar.css"
// import logo1 from "../images/logo1.png"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid d-flex bd-highlight">

          <div className="logo p-4 flex-grow-1 ">
          <span><i className="fa-solid fa-layer-group"></i></span>
        
            <a className=" navbar-brand text-uppercase fs-1 fw-bolder" href="#">Vebdev</a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse p-4" id="navbarNav">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link active fs-2 p-2 px-5" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-2 p-2 px-5" href="#">Features</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link fs-2 p-2 px-5" href="#">My Todos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-2 p-2 px-5" href="#">Contact Us</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar