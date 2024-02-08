import React from "react";

const NavBar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#E5BFEE",border: "2px solid black"} } >
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://e7.pngegg.com/pngimages/689/342/png-clipart-globe-flags-of-the-world-country-world-miscellaneous-flag.png" height="30" width="30"/>
            
          </a>
          Country App
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Add Country 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view">
                  View Country
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search">
                  SearchCountry
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      <br></br>
    </div>
  );
};

export default NavBar;
