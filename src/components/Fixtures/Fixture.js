// import "./App.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import style from "./Fixture.module.scss";
import moment from "moment";

const cx = classNames.bind(style);

function Fixture({ data }) {
  const {
    fixture: { referee, status, venue, date },
    goals,
    teams,
  } = data;
  console.log("data", data);
  console.log("date", Date.parse(date));
  return (
    <div className={cx("fixture")}>
      <div>{moment(date).format("Do MMMM  YYYY")}</div>
      <div className={cx("fixture__teams")}>
        <div className={cx("teams__home")}>{teams.home.name}</div>
        <div className={cx("teams__away")}>{teams.away.name}</div>
      </div>
      <div></div>
    </div>
  );
}

export default Fixture;
