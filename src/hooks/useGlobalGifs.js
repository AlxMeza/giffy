import {useContext} from 'react';
import GifContext from 'context/GifContext';

const useGlobalGifs = () => {
    return useContext(GifContext).gifs;
}

export default useGlobalGifs;