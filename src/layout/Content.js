import React, { useEffect, useState } from "react";
import banner from "../img/up.png";
import {
  BsArrowRightCircle,
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-scroll";
export default function Content() {
  const [goingDown, setGoingDown] = useState("bg-light-gray border-bottom");
  const [changeSize, setChangeSize] = useState(checkDefaultSize());
  useEffect(() => {
    const handleScroll = () => {
      const scroller = window.scrollY;
      if (scroller > 5) {
        setGoingDown("mt-5 bg-light-gray border-bottom");
      } else {
        setGoingDown("bg-light-gray border-bottom");
      }
    };
    const handleChangeScreen = () => {
      const changeSize = window.innerWidth;
      if (changeSize > 1390 || changeSize >= 1205) {
        setChangeSize(0);
      } else if (changeSize <= 1201) {
        setChangeSize(2);
      } else if (changeSize <= 520) {
        setChangeSize(3);
      } else {
        setChangeSize(1);
      }
    };
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    window.addEventListener("resize", () => {
      handleChangeScreen();
    });
  }, []);

  function checkDefaultSize() {
    const defaultSizeVal = window.innerWidth;
    console.log(defaultSizeVal);
    if (defaultSizeVal > 1399) {
      return 0;
    } else if (defaultSizeVal < 1201) {
      return 2;
    } else if (defaultSizeVal < 520) {
      return 3;
    } else {
      return 1;
    }
  }
  function changeClassCol(changeData) {
    let position = {};
    if (changeData === 0) {
      position = {
        char: "col-lg-6 pt-lg-5 mt-lg-5 pt-md-5 mt-md-5",
        pic: "col-lg-6 text-right xs-text-center xs-border-bottom",
        pic2: "81.5%",
      };
    } else if (changeData === 2) {
      position = {
        char: "col-lg-12 pt-lg-5 mt-lg-5 pt-md-5 mt-md-5",
        pic: "col-lg-12 xs-border-bottom",
        pic2: "85%",
      };
    } else if (changeData === 3) {
      position = {
        char: "col-lg-12 pt-lg-5 mt-lg-5 pt-md-5 mt-md-5",
        pic: "col-lg-12 xs-border-bottom",
        pic2: "70%",
      };
    } else {
      position = {
        char: "col-lg-7 pt-lg-5 mt-lg-5 pt-md-5 mt-md-5",
        pic: "col-lg-5 xs-border-bottom",
        pic2: "85%",
      };
    }
    return position;
  }
  return (
    <div className={goingDown}>
      <div className="container">
        <main className="position-relative overflow-hidden pt-4 text-center bg-light-gray">
          <div className="row g-1">
            <div className={changeClassCol(changeSize).char}>
              <p className="my-2 lead fw-normal ">Hello , I am</p>
              <h1 className="display-4 fw-normal ">
                <b>TABUANG JANDAM</b>
              </h1>
              <p className="lead fw-normal px-5">
                Scrum master | Frontend Developer | Backend Developer
              </p>
              <p className="social-links px-5 pb-4">
                <a
                  href="https://www.facebook.com/Tabuangj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://twitter.com/TabuangJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
                <a
                  href="https://th.linkedin.com/in/tabuang-jandam-b9a9aa1a6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCwJX_r4g9Uv4apyguN-LP7Q"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube />
                </a>
              </p>
              <Link
                className="btn btn-outline-secondary"
                activeClass="active"
                to="experiance"
                spy={true}
                smooth={true}
              >
                View My Experiance <BsArrowRightCircle />
              </Link>
            </div>
            <div className={changeClassCol(changeSize).pic}>
              <img src={banner} width={changeClassCol(changeSize).pic2} alt="Tabuang" />
            </div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </main>
      </div>
    </div>
  );
}
