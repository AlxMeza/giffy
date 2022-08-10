import React, { useRef, useEffect, useCallback } from 'react';
import ListOfGifs from '../ListOfGifs/ListOfGifs'
import Spinner from '../Spinner/Spinner'
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it';
// import useSEO from 'hooks/useSEO';
import {Helmet} from 'react-helmet';

const Search = ({params}) => {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false});
    
    const title = gifs ? `${gifs.length} gifs of ${keyword}` : loading ? 'Loading...' : ''
    // useSEO( {title} )
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
                <Helmet>
                    <title>{title} || Giffy</title>
                    <meta name="description" content={title} />
                </Helmet>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs = {gifs}/>
                <div id='visor' ref={externalRef}></div>
            </>
        }
    </>

}

export default Search;