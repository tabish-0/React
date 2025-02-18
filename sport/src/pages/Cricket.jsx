import React, { useEffect, useState, useTransition } from "react";
import CricketCard from "../components/Layout/CricketCard";
import cricketTeams from "../api/cricketCard.json";
import CricketFilter from '../components/UI/CricketFilter.jsx'

function Cricket() {
  const [teams, setTeams] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTeams(cricketTeams)
  }, [])

  const searchCountry = (team) => {
    if (search) {
      return team.name.toLowerCase().includes(search.toLowerCase());
    }
    return team;
  };

  const filterRegion = (team) => {
    if (filter === "all") return team;
    return team.region === filter;
  };

  const filterTeams = teams.filter(
    (team) => searchCountry(team) && filterRegion(team)
  );

  return (
    <section className="country-section">
      <CricketFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        teams={teams}
        setTeams={setTeams}
      />
      <ul className="grid grid-four-cols">
        {filterTeams.map((team) => (
          <CricketCard key={team.name} team={team} />
        ))}
      </ul>
    </section>
  );
}

export default Cricket;
