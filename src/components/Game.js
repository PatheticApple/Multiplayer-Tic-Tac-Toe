import React, { useState } from "react";
import Board from "./Board";

function Game({channel, setChannel}) {
    console.log("CLIENT IS ACTUALLY HERE", channel);
    const [playersJoined, setPlayersJoined] = useState(channel.state.watcher_count === 2);


    const [result, setResult] = useState({winner: "none", state: "none"})


    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2);
    })
    if (!playersJoined) {
        return <div>Waiting for other player to join</div>
    }
    return (
        <div className="gameContainer">
            <Board result={result} setResult = {setResult}/>
            {/* <Window>
                <MessageList/>
                <MessageInput/>
            </Window> */}
            <button onClick={async () => {
                await channel.stopWatching();
                setChannel(null);

            }}>Leave Game</button>
        </div>
    )
}

export default Game;