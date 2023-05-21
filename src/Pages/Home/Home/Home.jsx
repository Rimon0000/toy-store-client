import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../hooks/useTitle';
import Article from '../Article/Article';
import About from '../About/About';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Article></Article>
            <About></About>
        </div>
    );
};

export default Home;