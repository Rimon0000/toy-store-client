import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../hooks/useTitle';
import Article from '../Article/Article';
import WithUs from '../WithUs/WithUs';
import NewArrival from '../NewArrival/NewArrival';
import Contact from '../Contact/Contact';
import BestSell from '../BestSell/BestSell';
import About from '../About/About';
import ClientReview from '../ClientReview/ClientReview';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <About></About>
            <NewArrival></NewArrival>
            <BestSell></BestSell>
            <ClientReview></ClientReview>
            <WithUs></WithUs>
            <Contact></Contact>
            <Article></Article>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;