import React from "react";
import { BsFillPhoneFill, BsPinMapFill, BsEnvelopeFill } from "react-icons/bs";
export default function Contact() {
  return (
    <div className="bg-light-gray pt-5 pb-5">
      <div className="container">
        <div className="row info">
          {/* start quickly contact */}
          <div className="col-lg-4 col-md-3 item text-center ">
            <span style={{ fontSize: "35px" }}>
              <BsFillPhoneFill />
            </span>
            <div className="cont">
              <h6>Phone</h6>
              <p>(+66) 88 444 2898</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 item text-center ">
            <span style={{ fontSize: "35px" }}>
              <BsPinMapFill />
            </span>
            <div className="cont">
              <h6>Address</h6>
              <p>88 / 611 Prodigy MRT Bangkhea, Bangkok</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 text-center">
            <span style={{ fontSize: "35px" }}>
              <BsEnvelopeFill />
            </span>
            <div className="cont">
              <h6>Email</h6>
              <p>tabuang11@gmail.com</p>
            </div>
          </div>
        </div>
        {/* end quickly contact */}
      </div>
    </div>
  );
}
