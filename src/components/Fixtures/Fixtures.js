// import "./App.scss";
import classNames from "classnames/bind";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchFixtures from "../../api/fetchFixtures";
import {
  liverpoolFixtures as data,
  teamInfo as teamData,
} from "../../api/testdata";
import Row from "./Fixture";
import style from "./Fixtures.module.scss";
import PageHero from "../PageHero/PageHero";
import Fixture from "./Fixture";
import Selection from "../Selection/Selection";
import fetchTeam from "../../api/fetchTeam";

// prem - 39
// la liga - 140
// bundes - 218
// seria a - 71

// const { data, status } = useQuery("scores", () =>
//   fetchLeague({ league: 140, season: 2022 })
// );
// const { data, status } = useQuery("fixtures", () =>
//   fetchFixtures({ league: 39, team: 40 })
// );
//   if (status === "loading") {
//     return <>loading</>;
//   }
//   if (status === "error") {
//     return <>error</>;
//   }

const selections = [
  { name: "Fixtures", id: "fixtures" },
  { name: "Results", id: "results" },
];

const cx = classNames.bind(style);

function Fixtures() {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState("fixtures");
  const [month, setMonth] = useState();

  // const { data, status } = useQuery("fixtures", () =>
  //   fetchFixtures({
  //     league: searchParams.get("lid"),
  //     team: searchParams.get("id"),
  //   })
  // );

  // const { data: teamData, status: teamStatus } = useQuery("teams", () =>
  //   fetchTeam({
  //     id: searchParams.get("id"),
  //   })
  // );

  // if (status === "loading" || teamStatus === "loading") {
  //   return <>loading</>;
  // }
  // if (status === "error" || teamStatus === "error") {
  //   return <>error</>;
  // }

  const { response } = data;
  const { response: responseTeam } = teamData;

  return (
    <>
      <PageHero
        logo={responseTeam[0].team.logo}
        name={responseTeam[0].team.name}
      />
      <div className={cx("fixtures-container")}>
        <Selection
          selections={selections}
          activeId={active}
          setActiveId={setActive}
        />
        <div className={cx("fixtures-box")}>
          {response?.map((item) => {
            return (
              <Fixture
                data={item}
                active={active}
                team={responseTeam[0].team.name}
                setMonth={setMonth}
                month={month}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fixtures;
