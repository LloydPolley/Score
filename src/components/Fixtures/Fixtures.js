// import "./App.scss";
import cx from "classnames";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchFixtures from "../../api/fetchFixtures";
import { liverpoolFixtures } from "../../api/testdata";
import Row from "./Fixture";
// import "./FootballTable.scss";
import PageHero from "../PageHero/PageHero";
import Fixture from "./Fixture";

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

function Fixtures() {
  // const [teams, setTeams] = useState([]);
  // const [active, setActive] = useState(39);

  const { response } = liverpoolFixtures;
  // console.log("fetch", response);

  return (
    <div className={cx("test")}>
      {response.map((item) => {
        return <Fixture data={item} />;
      })}
    </div>
  );
}

export default Fixtures;
