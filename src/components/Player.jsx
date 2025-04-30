import React from "react";
//Each player component
const Player = ({ id, name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="">
      <img
        className="max-w-2xl w-100 aspect-video object-cover rounded"
        src={image}
        alt=""
      />
      <div>
        <h1>
          Name: <span className="font-bold">{name}</span>
        </h1>
        <h1>Team: {team}</h1>
        <h1>Nationality: {nationality}</h1>
        <h1>JerseyNumber: {jerseyNumber}</h1>
        <h1>Age: {age}</h1>
      </div>
    </div>
  );
};

export default Player;
