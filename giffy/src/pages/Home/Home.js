import React, {useCallback} from 'react';
import { useLocation } from 'wouter';
import { useGifs } from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches'
import SearchForm from 'components/SearchForm/index'
import './home.css'

export default function Home(){
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();

    const handleSubmit = useCallback( ( { keyword } ) => {
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`);
    }, [pushLocation])

    return (
        <>
            <SearchForm onSubmit = { handleSubmit } />
            <h3 className="App-title">Ultima Busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <div className="App-category">
                <TrendingSearches />
            </div>
        </>
    )
}