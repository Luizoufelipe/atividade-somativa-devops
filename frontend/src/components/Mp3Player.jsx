import { useState, useEffect } from "react";

export function Mp3Player() {
    cont [ tracks, setTracks ] = useState( [] )
    const [ currentTrack, setCurrentTrack ] = useState( null )

    useEffect( () => {
        fetch( "http://localhost:8081/api/tracks" )
            .then( response => response.json() )
            .then( data => setTracks( data ) )
            .catch( error => console.error( "Erro ao carregar playlist: ", error ) )
    }, [])

    return (
        <div className="player-container">
            <ul className="playlist">
                { tracks.map( track => (
                    <li key={track.id}>
                        <button onClick={() => setCurrentTrack}>
                            {track.name}
                        </button>
                    </li>
                )) }
            </ul>

            { currentTrack && (
                <div className="player">
                    <h3>{ currentTrack.nome }</h3>
                    <audio src="http://localhost:8081/api/musicas/play/${currentTrack.id}"
                            controls
                            autoPlay/>
                </div>
            ) }
        </div>
    )
}