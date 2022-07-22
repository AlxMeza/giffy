import React, { useRef, useEffect, useCallback } from 'react';
import ListOfGifs from '../ListOfGifs/ListOfGifs'
import Spinner from '../Spinner/Spinner'
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it';

const Search = ({params}) => {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false});
    
    //const handleNextPage = () => setPage(prevPage => prevPage + 1)

    const debounceHandleNextPage = useCallback(debounce( 
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage]);

    useEffect( () => {
        if(isNearScreen) debounceHandleNextPage();
    }, [debounceHandleNextPage, isNearScreen]) 

    return <>
        {loading
            ? <Spinner/>
            : <>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs = {gifs}/>
                <div id='visor' ref={externalRef}></div>
            </>
        }
    </>

}

export default Search;