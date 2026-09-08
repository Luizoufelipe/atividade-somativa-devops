export function PlaylistCard( {title, trackCount} ) {
    return (
        <article className="playlist-card">
            <div className="image-frame"/>
            <h2>{ title }</h2>
            <p>{ trackCount } faixas</p>
        </article>
    )
}