import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'


const Navbar = () => {
  const{cart,isAuthenticated}=useContext(AppContext);

  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-white">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="/" >ALLEN COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" to="/">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fw-bold" to="/contact">Contact</Link>
        </li>
        </ul>

        <div className='buttons'>
  {isAuthenticated ? (
    <>
      <Link to="/cart" className='btn btn-outline-dark ms-2'>
        <i className="fa-solid fa-cart-shopping me-1"></i> Cart {cart.length}
      </Link>
      <Link to="/" className='btn btn-outline-dark ms-2 '>
      <i class="fa-solid fa-right-from-bracket"></i> Log Out
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className='btn btn-outline-dark'>
        <i className="fa-solid fa-right-to-bracket me-1"></i> Login
      </Link>
      <Link to="/register" className='btn btn-outline-dark ms-2'>
        <i className="fa-solid fa-user-plus me-1"></i> Register
      </Link>
      <Link to="/cart" className='btn btn-outline-dark ms-2'>
        <i className="fa-solid fa-cart-shopping me-1"></i> Cart {cart.length}
      </Link>
    </>
  )}
</div>

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar