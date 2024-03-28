import React, { useState } from "react";
import Card from "./Card";

const CardFilter = ({ generals }) => {
  const [filteredFaction, setFilteredFaction] = useState("");

  return (
    <div className="card-list">
      <select
        value={filteredFaction}
        onChange={(e) => setFilteredFaction(e.target.value)}
      >
        <option value="">All Factions</option>
        <option value="Faction A">Faction A</option>
        <option value="Faction B">Faction B</option>
      </select>
      {generals
        .filter(
          (card) => filteredFaction === "" || card.faction === filteredFaction
        )
        .map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            faction={card.faction}
            strength={card.strength}
          />
        ))}
    </div>
  );
};

export default CardFilter;
