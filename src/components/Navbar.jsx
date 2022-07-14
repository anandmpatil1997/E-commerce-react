import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light bg-white shadow-sm  ">
        <div class="container">
          <Link to="/">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAh0G1oQYmxCJIUsSO3CHm550itG_Bc2GNw&usqp=CAU"
              alt=""
              width="100px"
              height="50px"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/products">
                  <a class="nav-link">Products</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                  {" "}
                  <a class="nav-link">About</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">
                  {" "}
                  <a class="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
            <Link to="/login">
              {" "}
              <button type="button" class="btn btn-outline-secondary ">
                Login
              </button>
            </Link>

            <Link to="/cart"> </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
