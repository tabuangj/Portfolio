import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { BsFillLayersFill, BsFillGearFill } from "react-icons/bs";
import { FaReact, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiPhp,
  SiPython,
  SiJava,
  SiVisualstudio,
  SiCsharp,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import { AiFillDatabase } from "react-icons/ai";
import DataCenter from "../../../img/Data-Center.gif";
export default function Frontend() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const position = {
    javascriptText: "90%",
    javascriptWidth: { width: "90%" },
    phpText: "87%",
    phpWidth: { width: "87%" },
    pyText: "70%",
    pyWidth: { width: "70%" },
    javaText: "60%",
    javaWidth: { width: "60%" },
    vbText: "65%",
    vbWidth: { width: "65%" },
    ccsText: "60%",
    ccsWidth: { width: "60%" },
    htmlText: "88%",
    htmlWidth: { width: "88%" },
    cssText: "55%",
    cssWidth: { width: "55%" },
    myText: "80%",
    myWidth: { width: "80%" },
    svText: "82%",
    svWidth: { width: "82%" },
    mgText: "90%",
    mgWidth: { width: "90%" },
    olText: "70%",
    olWidth: { width: "70%" },
  };
  const [goingDown, setGoingDown] = useState(position);
  const [size, setSize] = useState(defaultSize());
  useEffect(() => {
    const handleScroll = () => {
      const scroller = window.scrollY;
      if (scroller > 3000) {
        setGoingDown({
          javascriptText: "90%",
          javascriptWidth: { width: "90%" },
          phpText: "87%",
          phpWidth: { width: "87%" },
          pyText: "70%",
          pyWidth: { width: "70%" },
          javaText: "60%",
          javaWidth: { width: "60%" },
          vbText: "65%",
          vbWidth: { width: "65%" },
          ccsText: "60%",
          ccsWidth: { width: "60%" },
          htmlText: "88%",
          htmlWidth: { width: "88%" },
          cssText: "55%",
          cssWidth: { width: "55%" },
          myText: "80%",
          myWidth: { width: "80%" },
          svText: "82%",
          svWidth: { width: "82%" },
          mgText: "90%",
          mgWidth: { width: "90%" },
          olText: "70%",
          olWidth: { width: "70%" },
        });
      } else {
        setGoingDown({
          javascriptText: "0%",
          javascriptWidth: { width: "0%" },
          phpText: "0%",
          phpWidth: { width: "0%" },
          pyText: "0%",
          pyWidth: { width: "0%" },
          javaText: "0%",
          javaWidth: { width: "0%" },
          vbText: "0%",
          vbWidth: { width: "0%" },
          ccsText: "0%",
          ccsWidth: { width: "0%" },
          htmlText: "0%",
          htmlWidth: { width: "0%" },
          cssText: "0%",
          cssWidth: { width: "0%" },
          myText: "0%",
          myWidth: { width: "0%" },
          svText: "0%",
          svWidth: { width: "0%" },
          mgText: "0%",
          mgWidth: { width: "0%" },
          olText: "0%",
          olWidth: { width: "0%" },
        });
      }
    };
    const handleChangeSize = () => {
      const changeSize = window.innerWidth;
      if (changeSize > 973) {
        setSize(1);
      }else if(changeSize <= 576){
        setSize(2);
      } else {
        setSize(0);
      }
    };
    window.addEventListener("resize", () => {
      handleChangeSize();
    });
    window.addEventListener("scroll", handleScroll);
    
  }, []);
  function defaultSize() {
    const changeSize = window.innerWidth;
    if (changeSize > 973) {
      return 1;
    }else if(changeSize <= 576){
      return 2;
    } else {
      return 0;
    }
  }
  function changeBySize(data){
    let position = {}
    if(data === 0){
      position = {
        container:"container px-4",
        dflex:"col d-flex align-items-start rline",
        dflex2:"col d-flex align-items-start",
        col:"col-md-6"
      }
      
    }else if(data === 2){
      position = {
        container:"container px-4 pt-4 ",
        dflex:"col d-flex align-items-start",
        dflex2:"col d-flex align-items-start",
        col:"col-md-6 pt-4"
      }
    }else{
      position = {
        container:"container px-4 pt-4 ",
        dflex:"col d-flex align-items-start",
        dflex2:"col d-flex align-items-start",
        col:"col-md-6"
      }
    }
    return position
  }
  return (
    <FadeIn>
      <div className={changeBySize(size).container}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
          <div className={changeBySize(size).dflex}>
            <svg
              className="bi text-muted flex-shrink-0 me-2"
              width="1.75em"
              height="1.75em"
            >
              <BsFillLayersFill style={{ fontSize: "27px" }} />
            </svg>
            <div>
              <h5 className="fw-bold">Full Stack Development</h5>
              <p>
                Develop a system that must start from installation of
                environment until end of the project.
              </p>
            </div>
          </div>
          <div className={changeBySize(size).dflex}>
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <FaReact style={{ fontSize: "27" }} />
            </svg>
            <div>
              <h5 className="fw-bold">Frontend Development</h5>
              <p>
                Develop user interfaces using libraries or frameworks and other
                development tools.
              </p>
            </div>
          </div>
          <div className={changeBySize(size).dflex}>
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <BsFillGearFill style={{ fontSize: "27px" }} />
            </svg>
            <div>
              <h5 className="fw-bold ">Backend Development</h5>
              <p>
                Develop system with support for both SOAP and REST and other API
                interfaces.
              </p>
            </div>
          </div>
          <div className={changeBySize(size).dflex2}>
            <svg
              className="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <FaDatabase style={{ fontSize: "27" }} />
            </svg>
            <div>
              <h5 className="fw-bold">Database Administrator</h5>
              <p>
                Manage use of Database, arrange maintenance and solve
                problems according.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-5 pb-5 text-center">
        <h5 className=" section-title fw-bold">
          <VscServerProcess style={{ fontSize: "27px" }} /> Programing Skill
        </h5>
      </div>
      <div className="row">
        <div className="col-md-6 pb-sm-4">
          <div className="padding-20px-left sm-no-padding">
            <div className="skills width-100 margin-40px-bottom sm-margin-30px-bottom xs-no-margin-bottom">
              <div className="prog-item">
                <p>
                  <SiJavascript /> JavaScript & NodeJS
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.javascriptText}
                    style={goingDown.javascriptWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>
                  <SiPhp /> PHP
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.phpText}
                    style={goingDown.phpWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>
                  <SiPython /> Python
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.pyText}
                    style={goingDown.pyWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>
                  <SiJava /> Java
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.javaText}
                    style={goingDown.javaWidth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={changeBySize(size).col}>
          <div className="padding-20px-left sm-no-padding">
            <div className="skills width-100 margin-40px-bottom sm-margin-30px-bottom xs-no-margin-bottom">
              <div className="prog-item">
                <p>
                  <SiVisualstudio /> VB.NET
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.vbText}
                    style={goingDown.vbWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>
                  <SiCsharp /> C#.NET
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.ccsText}
                    style={goingDown.ccsWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>
                  <SiHtml5 /> HTML
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.htmlText}
                    style={goingDown.htmlWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>
                  <SiCss3 /> CSS
                </p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.cssText}
                    style={goingDown.cssWidth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-5 mt-4 pb-5  text-center">
        <h5 className=" section-title fw-bold">
          <AiFillDatabase style={{ fontSize: "27px" }} />
          Database Skill
        </h5>
      </div>
      <div className="row pb-5">
        <div className="col-md-6 px-1 text-center">
          <img src={DataCenter} style={{ width: "70%" }} alt="Sea" />
        </div>
        <div className="col-md-6 px-2 pb-4">
          <div className="padding-20px-left sm-no-padding">
            <div className="skills width-100 margin-40px-bottom sm-margin-30px-bottom xs-no-margin-bottom">
              <div className="prog-item">
                <p>Mysql</p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.myText}
                    style={goingDown.myWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>SQL Server</p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.svText}
                    style={goingDown.svWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>MongoDB</p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.mgText}
                    style={goingDown.mgWidth}
                  />
                </div>
              </div>
              <div className="prog-item">
                <p>Oracle</p>
                <div className="skills-progress">
                  <span
                    data-value={goingDown.olText}
                    style={goingDown.olWidth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
