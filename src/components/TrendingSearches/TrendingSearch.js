import React, { useState, useEffect } from 'react';
import getTrendings from 'services/getTrendings';
import Category from 'components/Category/Category';

export default function TrendingSearches () {
    const [trends, setTrends] = useState([]);
    useEffect(function(){
        getTrendings().then(setTrends)
    }, [])

    return <Category name='Trending Topics' options={trends} />
}