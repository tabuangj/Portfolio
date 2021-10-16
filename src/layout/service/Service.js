import React from "react";
import { BsFillLayersFill, BsFillGearFill } from "react-icons/bs";
import { FaReact, FaDatabase } from "react-icons/fa";
export default function Service() {
  return (
    <div className="bg-light-gray">
      <div className="container pt-5 pb-5">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-4 pb-3 text-center">
          <h1 className="display-5 fw-normal">
            <b className="border-bottom section-title">Service</b>
          </h1>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-5 mt-3 g-4 py-3">
          <div className="col d-flex text-center rline">
            <div>
              <h5 className="fw-bold text-muted"><BsFillLayersFill style={{ fontSize: "27px" }} /> Full Stack Development</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex text-center rline">
            <div>
              <h5 className="fw-bold text-muted"><FaReact style={{ fontSize: "27" }} /> Frontend Development</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex text-center rline">
            <div>
              <h5 className="fw-bold text-muted "> <BsFillGearFill style={{ fontSize: "27px" }} /> Backend Development</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div className="col d-flex text-center">
            <div>
              <h5 className="fw-bold text-muted"><FaDatabase style={{ fontSize: "27" }} /> Database Administrator</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-3 pb-3 mb-3"></div>
    </div>
  );
}
