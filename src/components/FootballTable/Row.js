import { Link } from "react-router-dom";
import "./Row.scss";

function Row({
  leagueId,
  searchId,
  rank,
  logo,
  name,
  played,
  win,
  draw,
  lose,
  goalsFor,
  against,
  points,
  goalsDiff,
  form,
}) {
  return (
    <div className="row">
      <div className="row__intro">
        <p className="row__position">{rank}</p>
        <div className="row__badge">
          <img src={logo} />
        </div>
        <Link to={`/fixtures?id=${searchId}&lid=${leagueId}`}>
          <p className="row__name">{name}</p>
        </Link>
      </div>

      <div className="row__data">
        <p className="row__played">{played}</p>
        <p className="row__desktop">{win}</p>
        <p className="row__desktop">{draw}</p>
        <p className="row__desktop">{lose}</p>
        <p className="row__desktop">{goalsFor}</p>
        <p className="row__desktop">{against}</p>
        <p className="row__goal-diff">{goalsDiff}</p>
        <p className="row__points">{points}</p>
      </div>
      <div className="row__form">
        {form !== "Form" ? (
          form
            ?.split("")
            .reverse()
            .map((result) => <p className={`row__result row__${result}`} />)
        ) : (
          <p className="row__result-title">Form</p>
        )}
      </div>
    </div>
  );
}

export default Row;
