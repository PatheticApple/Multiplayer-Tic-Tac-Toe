import React, { useState } from "react";

function Game({channel}) {
    console.log("CLIENT IS ACTUALLY HERE", channel);
    const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count == 2);

    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2);
    })
    if (!playersJoined) {
        return <div>Waiting for other player to join</div>
    }
    return <h1>Game</h1>
}

export default Game;