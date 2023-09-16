import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../hooks/useTitle';
import Article from '../Article/Article';
import WithUs from '../WithUs/WithUs';
import NewArrival from '../NewArrival/NewArrival';
import Contact from '../Contact/Contact';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <NewArrival></NewArrival>
            <WithUs></WithUs>
            <Contact></Contact>
            <Article></Article>
        </div>
    );
};

export default Home;