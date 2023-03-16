const fetchLeague = async ({ league, season }) => {
  console.log("fetch league");
  const res = await fetch(
    `https://v3.football.api-sports.io/standings?league=${league}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3a76a67dd7377fb3e3d3e321a2ac026d",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    }
  );
  console.log(
    `https://v3.football.api-sports.io/standings?league=${league}&season=${season}`
  );
  return res.json();
};

export default fetchLeague;
