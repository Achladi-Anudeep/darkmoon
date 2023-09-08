import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Images/DarkmoonLogoTransparantBgWithoutBrandName.png";
import { GlobalContext } from "../../contexts/Global/GlobalContext";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ScrollToTop } from "../../functions/ScrollToTop";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const { mobileMenu, setMobileMenu } = useContext(GlobalContext);
  const navpaths = [
    {
      name: "Explore",
      path: "/explore-product",
    },
    {
      name: "Our Science",
      path: "/our-science",
    },
    {
      name: "Why Us",
      path: "/why-us",
    },
    {
      name: "Learn More",
      path: "/learn-more",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <nav className="nav">
      <div className="nav-holder">
        <Link className="logo-text" to="/">
          <img src={Logo} alt="logo" />
          <h1>Dark Moon</h1>
        </Link>
        <ul className={mobileMenu ? "nav-links-mobile" : "nav-links"}>
          {navpaths.map((r, i) => (
            <li
              onClick={() => {
                setMobileMenu(false);
                ScrollToTop();
              }}
              key={i}
            >
              <Link to={r.path}>{r.name}</Link>
            </li>
          ))}
        </ul>
        <button
          className="mobile-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <GrClose /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
