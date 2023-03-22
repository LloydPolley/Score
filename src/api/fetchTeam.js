const fetchTeam = async ({ id }) => {
  console.log("fetch team");
  const res = await fetch(`https://v3.football.api-sports.io/teams?id=${id}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3a76a67dd7377fb3e3d3e321a2ac026d",
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  });

  return res.json();
};

export default fetchTeam;
