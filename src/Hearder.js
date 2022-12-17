import "./styles.css";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-inverse">
        <div cl ass="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Avantika
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/Skill">Skill</Link>
            </li>
          </ul>
          <form class="navbar-form navbar-left" action="/action_page.php">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                name="search"
              ></input>
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
