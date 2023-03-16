// import "./App.scss";
import cx from "classnames";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchLeague from "../../api/fetchLeague";
import { laLiga, premierLeague } from "../../api/testdata";
import Row from "./Row";
import "./FootballTable.scss";
import PageHero from "../PageHero/PageHero";
import Selection from "../Selection/Selection";

// prem - 39
// la liga - 140
// bundes - 218
// seria a - 71

// const { data, status } = useQuery("scores", () =>
//   fetchLeague({ league: 140, season: 2022 })
// );
//   if (status === "loading") {
//     return <>loading</>;
//   }
//   if (status === "error") {
//     return <>error</>;
//   }

function Table() {
  const [teams, setTeams] = useState([]);
  const [active, setActive] = useState(39);

  const { response } = premierLeague;

  useEffect(() => {
    if (active === 39) {
      setTeams(response[0]?.league?.standings[0]);
    }
    if (active === 140) {
      setTeams(laLiga?.response[0]?.league?.standings[0]);
    }
  }, [active]);

  return (
    <>
      <PageHero title={"Premier League"} />
      <div className="table">
        <Selection activeId={active} setActiveId={setActive} />
        <Row
          rank={"#"}
          played={"Pl"}
          win={"W"}
          draw={"D"}
          lose={"L"}
          goalsFor={"GF"}
          against={"GA"}
          points={"Pts"}
          goalsDiff={"GD"}
          form={"Form"}
        />
        {teams?.length
          ? teams.map((team) => {
              const {
                rank,
                team: { logo, name },
                all: {
                  played,
                  win,
                  draw,
                  lose,
                  goals: { for: goalsFor, against },
                },
                points,
                goalsDiff,
                form,
              } = team;

              return (
                <Row
                  key={rank}
                  rank={rank}
                  logo={logo}
                  name={name}
                  played={played}
                  win={win}
                  draw={draw}
                  lose={lose}
                  goalsFor={goalsFor}
                  against={against}
                  points={points}
                  goalsDiff={goalsDiff}
                  form={form}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

export default Table;
