import React from 'react';
import Gif from '../Gifs/Gif';
import './ListOfGifs.css'

export default function ListOfGifs ({ gifs }) {
    return (
        <div className="ListOfGifs">
            {gifs.map(({id, url, title}) => <Gif key={id} title={title} id={id} url={url}/>)}
        </div>
    )
}