import React, {useState} from 'react';
import { useLocation } from 'wouter';
import { useGifs } from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches'
import './home.css'

export default function Home(){
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const { loading, gifs } = useGifs();

    const handleSubmit = event => {
        //navegar a otra ruta
        event.preventDefault();
        console.log(path);
        pushLocation(`/search/${keyword}`);
    }
    const handleChange = event => {
        setKeyword(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button className="search-btn">Search</button>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a Gif"/>
            </form>
            <h3 className="App-title">Ultima Busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <div className="App-category">
                <TrendingSearches />
            </div>
        </>
    )
}