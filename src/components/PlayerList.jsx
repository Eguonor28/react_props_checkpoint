import React from "react";
import playerDetails from "../data/player";
import Player from "./Player";

const PlayerList = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl my-2 font-bold">
        Best Players Of All Time
      </div>
      <div className="mx-auto grid grid-cols md:grid-cols-2 max-w-4xl space-y-6 text-sm justify-center">
        {playerDetails.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            age={player.age}
            image={player.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
