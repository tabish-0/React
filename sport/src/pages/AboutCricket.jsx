import React from "react";
import cricketData from "../api/cricketData.json";

function AboutCricket() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the cricket's Interesting facts
        <br />
        we should know
      </h2>
      <div className="gradient-cards">
        {cricketData.map((country) => {
          const { id, countryName, teamName, captain, worldCupsWon, interestingFact} =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">TeamName: </span>
                  {teamName}
                </p>
                <p>
                  <span className="card-description">Captain: </span>
                  {captain}
                </p>
                <p>
                  <span className="card-description">WorldCupsWon: </span>
                  {worldCupsWon}
                </p>
                <p>
                  <span className="card-description">Interesting Facts: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutCricket;
