import React from "react";
import { NavLink, useParams } from "react-router-dom";
import teamsData from "../../api/cricketDetail.json";

const CricketDetails = () => {
  const { id } = useParams();
  const team = teamsData.find((team) => team.name.toLowerCase() === decodeURIComponent(id).toLowerCase());

  console.log(team);  // Check team data in the console

  if (!team) {
    return <h2 className="text-5xl">❌ Team Not Found</h2>;
  }

  return (
    <section className="card country-details-card container">
        <div className="container-card bg-white-box">
          <div className="country-image grid grid-two-cols">
            <img
              src={team.logo}
              alt={`${team.name} logo`}
              className="flag rounded-xl"
            />
            <div className="country-content">
              <p className="card-title"> {team.name} 🏏</p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Captain: </span>
                  {team.captain}
                </p>
                <p>
                  <span className="card-description"> Ranking: #</span>
                  {team.ranking}
                </p>
                <p>
                  <span className="card-description"> Matches: </span>
                  {team.matches}
                </p>
                <p>
                  <span className="card-description"> WorldCupWins: </span>
                  {team.worldCupWins}
                </p>
                <p>
                  <span className="card-description"> Region: </span>
                  {team.region}
                </p>

                <p>
                  <span className="card-description">Founded: </span>
                  {team.founded}
                </p>
                <p>
                  <span className="card-description"> HomeGround: </span>
                  {team.homeGround}
                </p>
                <p>
                  <span className="card-description">Coach: </span>
                  {team.coach}
                </p>
              </div>
            </div>
          </div>

          <div className="country-content">
              <div className="infoContainer">
                <p>
                  <span className="card-description">Board: </span>
                  {team.board}
                </p>
                <p>
                  <span className="card-description"> Playing Style: </span>
                  {team.playingStyle}
                </p>
                <p>
                  <span className="card-description"> key Players: </span>
                  {team.keyPlayers.join(" , ")}
                </p>
                <p>
                  <span className="card-description"> Squad: </span>
                  {team.squad.join(" , ")}
                </p>
                <p>
                  <span className="card-description"> Main players: </span>
                  {team.mainPlayers.join(" , ")}
                </p>
                <p>
                  <span className="card-description"> Major Achievements: </span>
                  {team.majorAchievements}
                </p>
                <p>
                  <span className="card-description"> Rivalries: </span>
                  {team.rivalries.join(" , ")}
                </p>
                <p>
                  <span className="card-description"> fan-Base: </span>
                  {team.fanBase}
                </p>
                <p>
                  <span className="card-description"> ICC-Rankings: </span>
                  {Object.entries(team.iccRankings).map(([key, value]) => `${key}: ${value}`).join(" , ")}
                </p>
                <p>
                  <span className="card-description"> Notable Record: </span>
                  {team.notableRecords}
                </p>
                <p>
                  <span className="card-description"> Recent performances: </span>
                  {team.recentPerformance}
                </p>
              </div>
          </div> 

        <div className="country-card-backBtn">
          <NavLink to="/cricket" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
        </div>
    </section>
  );
};

export default CricketDetails;
