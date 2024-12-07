import React from 'react';
import SportsSlider from '../components/SportsSlider';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LimitedProducts from '../components/LimitedProducts';
import SportsCategories from '../components/SportsCategories';

const Home = () => {
    return (
        <div>
            <SportsSlider />
            <LimitedProducts />
            <SportsCategories />
            <Testimonials />
            <FAQ />
        </div>
    );
};

export default Home;