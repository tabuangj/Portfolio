import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Dropdown } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";
export default function Header() {
  const [goingDown, setGoingDown] = useState("py-1 bg-light-gray sticky-top");
  const [sizeChange, setSizeChange] = useState(defaultScreen());
  useEffect(() => {
    const handleScroll = () => {
      const scroller = window.scrollY;
      if (scroller > 5) {
        setGoingDown("Small shadow py-1 bg-light fixed-top ");
      } else {
        setGoingDown("py-1 bg-light-gray sticky-top");
      }
    };
    const handleChangeSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1390) {
        setSizeChange(0);
      } else {
        setSizeChange(1);
      }
    };
    window.addEventListener("resize", handleChangeSize);
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }, []);
  function defaultScreen() {
    const screenDefaultVal = window.innerWidth;
    if (screenDefaultVal < 1390) {
      return 0;
    } else {
      return 1;
    }
  }
  function navigationDefault(changeInfo) {
    if (changeInfo === 1) {
      return (
        <ul className="nav">
          <li className="nav-item">
            <Link
              className="nav-link navLink link-dark pt-3 "
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              className="nav-link navLink link-dark pt-3"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experiance"
              className="nav-link navLink link-dark pt-3"
              spy={true}
              smooth={true}
            >
              Experiance
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skill"
              className="nav-link navLink link-dark pt-3"
              spy={true}
              smooth={true}
            >
              Skill
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className="nav-link navLink link-dark pt-3"
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <Dropdown className="nav">
          <Dropdown.Toggle variant="default">
            <BiMenu /> Menu
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link
                className="nav-link link-dark"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
              <Link
                to="about"
                className="nav-link link-dark"
                spy={true}
                smooth={true}
              >
                About
              </Link>
              <Link
                to="experiance"
                className="nav-link link-dark"
                spy={true}
                smooth={true}
              >
                Experiance
              </Link>
              <Link
                to="skill"
                className="nav-link link-dark "
                spy={true}
                smooth={true}
              >
                Skill
              </Link>
              <Link
                to="contact"
                className="nav-link link-dark "
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
            </Dropdown.Menu>
        </Dropdown>
      );
    }
  }

  return (
    <div>
      <nav className={goingDown}>
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <h1 className="fw-normal">
                <b>JTabuang.</b>
              </h1>
            </li>
          </ul>
          {navigationDefault(sizeChange)}
        </div>
      </nav>
    </div>
  );
}
