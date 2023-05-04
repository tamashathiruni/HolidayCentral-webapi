import React from "react";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        
        <a class="navbar-brand logo" href="/home">
        <img src="hotel_images/Logo.jpg " class="logoimage" alt="not supproted" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav mr-5">
            {user ? (
              <>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-user"></i>
                    {user.name}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="/book/:roomid">
                      Bookings
                    </a>
                    <a class="dropdown-item" href="/home" onClick={logout}>
                      Logout
                    </a>
                  </div>
                </div>{" "}
              </>
            ) : (
              <>
                <b>
                  <a class="nav-item nav-link " href="/register">
                    Register
                  </a>
                </b>
                <b>
                  <a class="nav-item nav-link" href="/login">
                    Login
                  </a>
                </b>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
