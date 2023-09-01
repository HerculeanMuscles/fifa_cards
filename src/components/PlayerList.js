import React from "react";
import Player from "./Player";
import Players from "./players";

function PlayerList() {
	return (
		<>
			<div className="player-list">
				{Players.map((player, index) => (
					<Player key={index} {...player} />
				))}
			</div>
		</>
	);
}

export default PlayerList;
