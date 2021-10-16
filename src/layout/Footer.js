import React from "react";
import { BsFacebook, BsGithub, BsTwitter,BsLinkedin,BsInstagram } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.facebook.com/Tabuangj/"
            role="button"
            data-mdb-ripple-color="dark"
            target='_blank' rel="noreferrer"
          >
            <BsFacebook />
          </a>
          {/* Google */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://twitter.com/TabuangJ"
            role="button"
            data-mdb-ripple-color="dark"
            target='_blank' rel="noreferrer"
          >
            <BsTwitter />
          </a>
          {/* Instagram */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://www.instagram.com/mitte_jt/"
            role="button"
            data-mdb-ripple-color="dark"
            target='_blank' rel="noreferrer"
          >
            <BsInstagram />
          </a>
          {/* Linkedin */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://github.com/tabuangj"
            role="button"
            data-mdb-ripple-color="dark"
            target='_blank' rel="noreferrer"
          >
            <BsGithub />
          </a>
          {/* Github */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="https://th.linkedin.com/in/tabuang-jandam-b9a9aa1a6"
            role="button"
            data-mdb-ripple-color="dark"
            target='_blank' rel="noreferrer"
          >
            <BsLinkedin/>
          </a>
        </section>

        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright : Tabuang Jandam | ReactJS Presentation
      </div>
      {/* Copyright */}
    </footer>
  );
}
