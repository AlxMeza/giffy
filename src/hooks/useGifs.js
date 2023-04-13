import { useContext, useState, useEffect } from 'react';
import getGifs from 'services/getGifs';
import GifsContext from 'context/GifContext';

const INITIAL_PAGE = 0

export function useGifs( {keyword} = {keyword: null} ) {
    const [loading, setLoading] = useState(false);
    const [loadingNext, setLoadingNext] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const { gifs, setGifs } = useContext(GifsContext);
    //Recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true);

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            //Guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keyword)
        });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(() => {
        if(page === INITIAL_PAGE ) return

        setLoadingNext(true);

        getGifs({ keyword : keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs) )
                setLoadingNext(false)
            })
    }, [page, keywordToUse, setGifs]);
    
    return {loading, loadingNext, gifs, setPage};
}    
