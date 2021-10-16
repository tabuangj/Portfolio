import React, { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import Boat from "../../../img/boat.jpeg";
import Boat2 from "../../../img/boat2.jpeg";
import Tajmahal from "../../../img/tajmahal.jpeg";
import Shanghai from "../../../img/Shanghai.jpeg";
import Kashmia from "../../../img/kashmia.jpeg";
import India from "../../../img/india.jpeg";
import Modal from "react-modal";
const customStyles = {
  overlay: {
    position: "fixed",
    top: "5%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(003, 000, 000, 0.75)",
  },
  content: {
    position: "absolute",
    width: "65%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "1px solid #ccc",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("body");
export default function Photo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [pic, setPic] = useState();

  function openModal(pic) {
    setPic(pic);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function selectPic(data) {
    if (data === 1) {
      return (
        <div>
          <img src={Boat2} style={{ width: "100%" }} alt="Sea" />
        </div>
      );
    }
    if (data === 2) {
      return (
        <div>
          <img src={Boat} style={{ width: "100%" }} alt="Sea" />
        </div>
      );
    }
    if (data === 3) {
      return (
        <div>
          {" "}
          <img src={Tajmahal} style={{ width: "100%" }} alt="Sea" />
        </div>
      );
    }
    if (data === 4) {
      return (
        <div>
          {" "}
          <img src={Shanghai} style={{ width: "100%" }} alt="Sea" />
        </div>
      );
    }
    if (data === 5) {
      return (
        <div>
          <img src={Kashmia} style={{ width: "100%" }} alt="Sea" />
        </div>
      );
    }
    if (data === 6) {
      return (
        <div>
          <img src={India} style={{ width: "100%" }} alt="Sea" />
        </div>
      );
    }
  }

  return (
    <FadeIn>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src={Boat2} style={{ width: "100%" }} alt="Sea" />
              <div className="card-body">
                <b>Dal lake Kashmir</b>
                <p className="text-muted">The life of the people in the lake</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => openModal(1)}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">31 DEC 2016</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={Boat} style={{ width: "100%" }} alt="Sea" />
              <div className="card-body">
                <b>Kashmir boat</b>
                <p className="text-muted">
                  Boats for the livelihood of the people of the lake
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => openModal(2)}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">31 DEC 2016</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={Tajmahal} style={{ width: "100%" }} alt="Sea" />
              <div className="card-body">
                <b>Tajmahal</b>
                <p className="text-muted">
                  A place believed to be a place of love
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => openModal(3)}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">24 DEC 2016</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={Shanghai} style={{ width: "100%" }} alt="Sea" />
              <div className="card-body">
                <b>Oriental tower</b>
                <p className="text-muted">Modernity of Shanghai, China</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => openModal(4)}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">30 JUN 2018</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={Kashmia} style={{ width: "100%" }} alt="Sea" />
              <div className="card-body">
                <b>Himalayas</b>
                <p className="text-muted">The Great fire of the Himalayas</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => openModal(5)}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">31 DEC 2016</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={India} style={{ width: "100%" }} alt="Sea" />
              <div className="card-body">
                <b>Gulmarg</b>
                <p className="text-muted">Remaining Indian civilization</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      onClick={() => openModal(6)}
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-muted">22 DEC 2016</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          {selectPic(pic)}
          <div className="pt-4 text-center">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Close
            </button>
          </div>
        </Modal>
      </div>
    </FadeIn>
  );
}
