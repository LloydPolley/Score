// import "./App.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import style from "./Fixture.module.scss";
import moment from "moment";

const cx = classNames.bind(style);

function Fixture({ data, active, team, month, setMonth }) {
  const {
    fixture: { referee, status, venue, date },
    goals,
    teams,
  } = data;

  const isResult = moment(date).isAfter() && active === "results";
  const isFixture = moment(date).isBefore() && active === "fixtures";
  const currentTeamHome = team === teams.home.name;
  const currentTeamAway = team === teams.away.name;

  if (isFixture || isResult) {
    return null;
  }

  return (
    <div className={cx("fixture")}>
      <div className={cx("fixture__teams")}>
        <div className={cx("fixture__team-info")}>
          <img src={teams.home.logo} />
          <span className={cx(currentTeamHome && "fixture__current")}>
            {teams.home.name}
          </span>
          <span>{goals.home}</span>
        </div>
        <div className={cx("fixture__team-info")}>
          <img src={teams.away.logo} />
          <span className={cx(currentTeamAway && "fixture__current")}>
            {teams.away.name}
          </span>
          <span>{goals.away}</span>
        </div>
      </div>
      <div className={cx("fixture__date")}>
        {moment(date).format("DD-MM-YY")}
      </div>
    </div>
  );
}

export default Fixture;
