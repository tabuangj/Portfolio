import React, { useEffect, useState } from "react";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
export default function About() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const position = {
    reactText: "0%",
    reactWidth: { width: "0%" },
    nodeText: "0%",
    nodeWidth: { width: "0%" },
    phpText: "0%",
    phpWidth: { width: "0%" },
    scrumText: "0%",
    scrumWidth: { width: "0%" },
    designText: "0%",
    designWidth: { width: "0%" },
    photographer: "0%",
    photographerWidth: { width: "0%" },
    dba: "0%",
    dbaWidth: { width: "0%" },
  };
  const [goingDown, setGoingDown] = useState(position);
  useEffect(() => {
    const handleScroll = () => {
      const scroller = window.scrollY;
      if (scroller > 300) {
        setGoingDown({
          reactText: "75%",
          reactWidth: { width: "75%" },
          nodeText: "90%",
          nodeWidth: { width: "90%" },
          phpText: "85%",
          phpWidth: { width: "85%" },
          scrumText: "65%",
          scrumWidth: { width: "65%" },
          designText: "55%",
          designWidth: { width: "55%" },
          photographer: "35%",
          photographerWidth: { width: "35%" },
          dba: "50%",
          dbaWidth: { width: "50%" },
        });
      } else {
        setGoingDown(position);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="container pt-5 pb-5">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-4 pb-3 text-center">
          <h1 className="display-5 fw-normal">
            <b className="border-bottom section-title">About me</b>
          </h1>
        </div>
        <div className="row pt-5 mt-3 pb-3 mb-3">
          <div className="col-md-6 pb-sm-5">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h3>Hello is me..</h3>
              <p>
                My name is Tabuang Jandam, I am specialized in software
                development, focusing on the field of web application,
                Development to support customer accessibility. This includes
                large transactions through web applications, specializing in
                development core of system. In management field, it has
                undergone training and real project management from small to
                medium-sized projects in project management in large companies,
                more details download my resume at the button below.
              </p>
              <a href="https://drive.google.com/file/d/1mYoZeXsGNtxUXfSeBO1-MY-C6jd8AbyK/view?usp=sharing" target='_blank' className="btn btn-outline-light" rel="noreferrer">
                Dowload My Resume <BsFillCloudArrowDownFill />
              </a>
            </div>
          </div>
          <div className="col-md-6 pt-2">
            <div className="padding-20px-left sm-no-padding">
              <div className="skills width-100 margin-40px-bottom sm-margin-30px-bottom xs-no-margin-bottom">
                <div className="prog-item">
                  <p>Frontend Developer</p>
                  <div className="skills-progress">
                    <span
                      data-value={goingDown.reactText}
                      style={goingDown.reactWidth}
                    />
                  </div>
                </div>
                <div className="prog-item">
                  <p>Backend Developer</p>
                  <div className="skills-progress">
                    <span
                      data-value={goingDown.nodeText}
                      style={goingDown.nodeWidth}
                    />
                  </div>
                </div>
                <div className="prog-item">
                  <p>Scrum Master</p>
                  <div className="skills-progress">
                    <span
                      data-value={goingDown.scrumText}
                      style={goingDown.scrumWidth}
                    />
                  </div>
                </div>
                <div className="prog-item">
                  <p>UX Design</p>
                  <div className="skills-progress">
                    <span
                      data-value={goingDown.designText}
                      style={goingDown.designWidth}
                    />
                  </div>
                </div>
                <div className="prog-item">
                  <p>Database Administrator</p>
                  <div className="skills-progress">
                    <span
                      data-value={goingDown.dba}
                      style={goingDown.dbaWidth}
                    />
                  </div>
                </div>
                <div className="prog-item">
                  <p>Photographer</p>
                  <div className="skills-progress">
                    <span
                      data-value={goingDown.photographer}
                      style={goingDown.photographerWidth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
