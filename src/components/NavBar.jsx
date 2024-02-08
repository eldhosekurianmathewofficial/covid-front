import React from "react";

const NavBar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg " style={{backgroundColor:"#E5BFEE",border: "2px solid black"} } >
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1020px-SARS-CoV-2_without_background.png" height="30" width="30"/>
            
          </a>
          Covid App
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
                  Add Patient
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/view">
                  View 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/search">
                  Search Patient
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
