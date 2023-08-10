import Introduction from './Introduction';

import ProductNewArrival from './ProductNewArrival';

import Review from './Review';
import ContactUs from './ContactUs';
import NewLastest from './NewsLastest';
import Matches from './Matches';
import Player from './Player';

function Home() {
    return (
        <>
            <Introduction />
            <NewLastest />
            <Matches />
            <ProductNewArrival />
            <Player />
            <Review />
            <ContactUs />
        </>
    );
}

export default Home;
