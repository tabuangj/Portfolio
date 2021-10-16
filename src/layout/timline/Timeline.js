import React, { useState, useEffect } from "react";
import {
  BsFillKanbanFill,
  BsFillPersonLinesFill,
  BsHddRackFill,
} from "react-icons/bs";
export default function Timeline() {
  const [scrum, setScrum] = useState();
  const [pm, setPm] = useState();
  const [sf, setSf] = useState();
  const [pg, setPg] = useState();
  const [size, setSize] = useState(defaultDisplay());

  useEffect(() => {
    const handleScroll = () => {
      const scroller = window.scrollY;
      if (scroller > 1000) {
        setScrum(true);
      } else {
        setScrum();
      }
      if (scroller > 1400) {
        setPm(true);
      } else {
        setPm();
      }
      if (scroller > 1700) {
        setSf(true);
      } else {
        setSf();
      }
      if (scroller > 1900) {
        setPg(true);
      } else {
        setPg();
      }
    };
    const handleChangeScreen = () => {
      const screenChange = window.innerWidth;
      if (screenChange <= 1200) {
        setSize(1);
      } else {
        setSize(0);
      }
    };
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    window.addEventListener("resize", () => {
      handleChangeScreen();
    });
  }, []);

  function ScrumContent(scrum) {
    const getshow = scrum ? "basket" : "basket hide";
    return (
      <ul className="timeline ">
        <li className={getshow}>
          <div className="timeline-badge">
            <BsFillKanbanFill />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">
                Digital solution project - Scrum master
              </h4>
              <p>
                <small className="text-muted">
                  FWD Thailand | MAR 2021 to present
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <ul className="text-muted">
                <small>
                  <li>
                    Management at sprint level of feature FWD link
                    <ul>
                      <li>Communicates sprint timelines and scopes</li>
                      <li>
                        Coordinate sprints, retrospective meetings and daily
                        stand-ups
                      </li>
                      <li>Provides basic Agile coaching to squads</li>
                      <li>
                        Facilitate internal communication and effective
                        collaboration
                      </li>
                      <li>
                        Point of contact for external issue and risk
                        communicationsWork with Product Owners to handle
                        backlogs and new requestsPoint of contact for external
                        issue and risk communications
                      </li>
                      <li>
                        Work with Product Owners to handle backlogs and new
                        requests
                      </li>
                      <li>
                        Remove blockers and support timely delivery of the
                        sprint
                      </li>
                      <li>
                        Help build a productive environment where team members
                        ‘own’ the product and enjoy working on it
                      </li>
                    </ul>
                  </li>
                  <li>Development & Design products system</li>
                  <li>Find solutions to solve problems of system</li>
                </small>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    );
  }
  function pmContent(pm) {
    const getshow = pm
      ? "timeline-inverted basket"
      : "timeline-inverted basket hide";
    return (
      <ul className="timeline">
        <li className={getshow}>
          <div className="timeline-badge">
            <BsFillPersonLinesFill />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">
                System Development - Senior Department Manager
              </h4>
              <p>
                <small className="text-muted">
                  Central group | SEP 2018 to FEB 2021
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <ul className="text-muted">
                <small>
                  <li>
                    Manage project development systems for customer payments
                    (B2C) that will open up payment methods with Cenpay.
                  </li>
                  <li>
                    Develop reports,Text settlement to support reconcile
                    accounting. Manage oracle and sql server stored procedure.
                  </li>
                  <li>
                    Solution Development field, design and develop middleware
                    development service API using NodeJS and Express for API
                    service, use MongoDB for manage transaction log, use NodeJS
                    for request and send data in JSON format between system,
                    manage and inquiry data by MS SQL stored procedure
                  </li>
                  <li>
                    Work on operate between infrastructure and system
                    architecture that must be know all of 2 system is
                    <ul className="text-muted">
                      <li>Cenpay System</li>
                      <li>Central Gift card</li>
                    </ul>
                  </li>
                </small>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    );
  }

  function devContent(sf) {
    const getshow = sf ? "basket" : "basket hide";
    return (
      <ul className="timeline">
        <li className={getshow}>
          <div className="timeline-badge">
            <BsHddRackFill />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Software Developer</h4>
              <p>
                <small className="text-muted">
                  Bee Box Technology | NOV 2018 to SEP 2019
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <ul className="text-muted">
                <small>
                  <li>
                    Developed and implemented software solutions based on client
                    requirements
                  </li>
                  <li>Tested and refined software prior to rollout</li>
                  <li>Released ad hoc product patches</li>
                  <li>
                    Design and develop the Bee box system tomanage the company's
                    work system. Including managing, connecting, testing and
                    improving payment gateway system
                  </li>
                </small>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    );
  }

  function dev2Content(pg) {
    const getshow = pg
      ? "timeline-inverted basket"
      : "timeline-inverted basket hide";
    return (
      <ul className="timeline">
        <li className={getshow}>
          <div className="timeline-badge">
            <BsHddRackFill />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">PHP Programmer</h4>
              <p>
                <small className="text-muted">
                  Thaifintech | NOV 2017 to NOV 2018
                </small>
              </p>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                <small>
                  Using RESTful API and Management Payment gatewayDesign and
                  development system for support company
                </small>
              </p>
            </div>
          </div>
        </li>
      </ul>
    );
  }

  function defaultDisplay() {
    const screenSize = window.innerWidth;
    if (screenSize > 1200) {
      return 0;
    } else {
      return 1;
    }
  }

  function displayBySize(screen, scrum, pm, sf, pg) {
    if (screen === 0) {
      return (
        <div>
          {ScrumContent(scrum)}
          {pmContent(pm)}
          {devContent(sf)}
          {dev2Content(pg)}
        </div>
      );
    } else {
      return <div>{cardDisplay()}</div>;
    }
  }

  function cardDisplay() {
    return (
      <div>
        <div className="col-md-12 pb-sm-5">
          <div className="h-100 p-5 text-dark bg-white rounded-3">
            <h4>Digital solution project - Scrum master</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              <small>FWD Thailand | MAR 2021 to present</small>
            </h6>
            <ul>
              <small>
                <li>
                  Management at sprint level of feature FWD link
                  <ul>
                    <li>Communicates sprint timelines and scopes</li>
                    <li>
                      Coordinate sprints, retrospective meetings and daily
                      stand-ups
                    </li>
                    <li>Provides basic Agile coaching to squads</li>
                    <li>
                      Facilitate internal communication and effective
                      collaboration
                    </li>
                    <li>
                      Point of contact for external issue and risk
                      communicationsWork with Product Owners to handle backlogs
                      and new requestsPoint of contact for external issue and
                      risk communications
                    </li>
                    <li>
                      Work with Product Owners to handle backlogs and new
                      requests
                    </li>
                    <li>
                      Remove blockers and support timely delivery of the sprint
                    </li>
                    <li>
                      Help build a productive environment where team members
                      ‘own’ the product and enjoy working on it
                    </li>
                  </ul>
                </li>
                <li>Development & Design products system</li>
                <li>Find solutions to solve problems of system</li>
              </small>
            </ul>
          </div>
        </div>
        <div className="col-md-12 pb-sm-5">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h4>System Development - Senior Department Manager</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              <small>Central group | SEP 2018 to FEB 2021</small>
            </h6>
            <ul>
                <small>
                  <li>
                    Manage project development systems for customer payments
                    (B2C) that will open up payment methods with Cenpay.
                  </li>
                  <li>
                    Develop reports,Text settlement to support reconcile
                    accounting. Manage oracle and sql server stored procedure.
                  </li>
                  <li>
                    Solution Development field, design and develop middleware
                    development service API using NodeJS and Express for API
                    service, use MongoDB for manage transaction log, use NodeJS
                    for request and send data in JSON format between system,
                    manage and inquiry data by MS SQL stored procedure
                  </li>
                  <li>
                    Work on operate between infrastructure and system
                    architecture that must be know all of 2 system is
                    <ul>
                      <li>Cenpay System</li>
                      <li>Central Gift card</li>
                    </ul>
                  </li>
                </small>
              </ul>
          </div>
        </div>
        <div className="col-md-12 pb-sm-5">
          <div className="h-100 p-5 text-dark bg-white rounded-3">
            <h4>Software Developer</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              <small>Bee Box Technology | NOV 2018 to SEP 2019</small>
            </h6>
            <ul>
                <small>
                  <li>
                    Developed and implemented software solutions based on client
                    requirements
                  </li>
                  <li>Tested and refined software prior to rollout</li>
                  <li>Released ad hoc product patches</li>
                  <li>
                    Design and develop the Bee box system tomanage the company's
                    work system. Including managing, connecting, testing and
                    improving payment gateway system
                  </li>
                </small>
              </ul>
          </div>
        </div>
        <div className="col-md-12 pb-sm-5">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h4>PHP Programmer</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              <small>Thaifintech | NOV 2017 to NOV 2018</small>
            </h6>
            <p>
                <small>
                  Using RESTful API and Management Payment gatewayDesign and
                  development system for support company
                </small>
              </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light-gray">
      <div className="container pt-5">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 pt-4 pb-5 mb-5 text-center">
          <h1 className="display-5 fw-normal">
            <b className="border-bottom section-title">Experiance</b>
          </h1>
        </div>
        {displayBySize(size, scrum, pm, sf, pg)}
      </div>
    </div>
  );
}
