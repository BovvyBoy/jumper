import React from 'react'

function Tile({ src, x, y, z }) {
    return <img 
        scr={src}
        className="tile"
        style={{ left: `${x}%`, top: `${y}%`, zIndex: z }}
        alt="tile for landscape"
    />
}

export default Tile
