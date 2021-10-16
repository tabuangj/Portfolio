import React, { useState, useEffect } from "react";
import { MdCameraFront } from "react-icons/md";
import { AiFillCamera } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import Frontend from "./frontend/Frontend";
import Design from "./design/Design";
import Photo from "./photo/Photo";
export default function Skill() {
  const activeSet = "btn btn-outline-secondary active";
  const defaultSet = "btn btn-outline-secondary";
  const [uiSelection, setUiSelection] = useState({ frontend: true });
  const [size, setSize] = useState(defaultSize());
  const buttonSelect = (e) => {
    if (e === 1) {
      setUiSelection({ frontend: true });
    }
    if (e === 3) {
      setUiSelection({ design: true });
    }
    if (e === 4) {
      setUiSelection({ photo: true });
    }
  };
  function showContent(e) {
    if (e.design) {
      return <Design />;
    }
    if (e.photo) {
      return <Photo />;
    }
    if (e.frontend) {
      return <Frontend />;
    }
  }
  useEffect(() => {
    const handleChangeSize = () => {
      const changeSize = window.innerWidth;
      if (changeSize <= 973) {
        setSize(1);
      } else {
        setSize(0);
      }
    };
    window.addEventListener("resize", () => {
      handleChangeSize();
    });
  }, []);

  function defaultSize() {
    const changeSize = window.innerWidth;
    if (changeSize <= 973) {
      return 1;
    } else {
      return 0;
    }
  }
  function changeBySize(data){
    let position
    if(data === 0){
      position = "col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-4 pb-2 pb-sm-4 text-center"
      
    }else{
      position = "col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-4 mb-5 pb-sm-4 text-center"
    }
    return position
  }
  return (
    <div>
      <div className="container pt-5 pb-5 mb-4">
        <div className={changeBySize(size)}>
          <h1 className="display-5 fw-normal">
            <b className="border-bottom section-title">Skill</b>
          </h1>
        </div>
        <div className="row py-lg-5">
          <div className="col-lg-12 col-md-12 mx-auto text-center">
            <p>
              <button
                className={uiSelection.frontend ? activeSet : defaultSet}
                onClick={() => buttonSelect(1)}
              >
                <MdCameraFront /> Developer
              </button>
              &nbsp;
              <button
                className={uiSelection.design ? activeSet : defaultSet}
                onClick={() => buttonSelect(3)}
              >
                <CgIfDesign /> Management
              </button>
              &nbsp;
              <button
                className={uiSelection.photo ? activeSet : defaultSet}
                onClick={() => buttonSelect(4)}
              >
                <AiFillCamera /> Photographer
              </button>
            </p>
          </div>
        </div>
        {showContent(uiSelection)}
      </div>
    </div>
  );
}
