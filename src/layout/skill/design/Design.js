import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { DiScrum } from "react-icons/di";
export default function Design() {
  return (
    <FadeIn>
      <div className="row">
        <div className="col-md-6 pb-sm-5">
          <div className="Small shadow h-100 p-5 text-dark bg-light rounded-3">
            <h3>
              <DiScrum />
              Scrum Master
            </h3>
            <p>
              Help the Development team develop better development practices and
              practices. Help with advice, support and removal of blocks that
              prevent the development team from working.Coordinate various
              development aspects, adjust the team environment to work happily.
            </p>
          </div>
        </div>
        <div className="col-md-6 pb-sm-5">
          <div className="Small shadow h-100 p-5 text-white bg-dark rounded-3">
            <h3>
              <AiOutlineFundProjectionScreen /> Project Manager
            </h3>
            <p>
              Manage projects or projects to complete on time. within the
              specified budget This includes project thinking. operation control
              Under the basic knowledge of planning, implementation (Schedule
              Plan), financial plan (Financial Plan), communication plan.
              (Communication Plan), Risk Management Plan and Procurement Plan.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
