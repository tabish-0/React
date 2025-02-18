import React from 'react'
import { NavLink } from 'react-router-dom'

function CricketCard({team}) {
    const {logo, name, ranking, captain, matches, worldCupWins} = team
    
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={logo} alt={`${name} logo`} />

        <div className="countryInfo">
          <p className="card-title">
            {name && name.length > 10 ? name.slice(0,12) + "..." : name}
          </p>
          <p>
            <span className="card-description">Ranking: #</span>
            {ranking}
          </p>
          <p>
            <span className="card-description">Captain: </span> {captain && captain.length>12 ? captain.slice(0,12) + "..." : captain}
          </p>
          <p>
            <span className="card-description">Matches: </span>
            {matches}
          </p>
          <p>
            <span className="card-description">WorldCupWins: </span>
            {worldCupWins}
          </p>

          <NavLink to={`/cricket/${name}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  )
}

export default CricketCard