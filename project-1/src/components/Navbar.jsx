import React from 'react'

export const Navbar = () => {
  return (
    <div> <nav className="navbar navbar-expand-lg navbar-light bg-light container">
    <div className="ccc" id="navbarNav">
      <div className='imgdiv'>
        <img className="d-inline-block-align-top"
          src="https://toppng.com/public/uploads/preview/ike-logo-png-hd-nike-logo-png-image-free-download-nike-logo-sv-11562865034fkhqkcoas6.png"
          width="65"
          height="65"
          alt="React Bootstrap logo"
          style={{ marginRight: "20px" }} />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <button className='botun'>Login</button>
    </div>
  </nav></div>
  )
}
