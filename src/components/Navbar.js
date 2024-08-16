import React from 'react'

import { Link } from'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Form">To_do app</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Contact">Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Product">Product</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Signupscreen">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Login">Login</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
