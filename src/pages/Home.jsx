import React from 'react';
import SportsSlider from '../components/SportsSlider';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LimitedProducts from '../components/LimitedProducts';
import SportsCategories from '../components/SportsCategories';
import { Bounce, Fade, Slide, Zoom } from 'react-awesome-reveal';

const Home = () => {
    return (
        <div >
            <Zoom duration={1000} easing="ease-in-out" triggerOnce>
                <SportsSlider />
            </Zoom>

            <Slide direction="right" duration={1200} delay={200} triggerOnce>
                <LimitedProducts />
            </Slide>

            <Slide direction="left" duration={1000} delay={200} triggerOnce>
                <SportsCategories />
            </Slide>

            <Fade direction="up" duration={900} delay={300} triggerOnce>
                <Testimonials />
            </Fade>

            <Slide direction="right" duration={800} delay={400} triggerOnce>
                <FAQ />
            </Slide>
        </div>
    );
};

export default Home;
