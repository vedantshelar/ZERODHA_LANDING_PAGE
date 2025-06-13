import React from 'react';
import Hero from './Hero.jsx';
import LeftSection from "./LeftSection.jsx";
import RightSection from './RightSection.jsx';
import Universe from './Universe.jsx';


function ProductsPage() {
    return ( 
        <div>
            <Hero />
            <LeftSection mainImg="media/images/kite.png" heading="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." links={[{link:"trydemo",text:"Try demo"},{link:"learn more",text:"Learn more"}]}/>
            <RightSection mainImg="media/images/console.png" heading="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." links={[{link:"learn more",text:"Learn more"}]}/>
            <LeftSection mainImg="media/images/coin.png" heading="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." links={[{link:"coin",text:"Coin"}]}/>
            <RightSection mainImg="media/images/kiteconnect.png" heading="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." links={[{link:"kite connect",text:"Kite connect"}]}/>
            <LeftSection mainImg="media/images/varsity.png" heading="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." links={[]}/>
            <Universe />
        </div>
     );
}

export default ProductsPage;