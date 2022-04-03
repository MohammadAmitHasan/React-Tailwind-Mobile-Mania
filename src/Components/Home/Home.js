import React from 'react';
import Mobiles from '../Mobiles.js/Mobiles';

const Home = () => {
    return (
        <div className='grid grid-cols-4 container mx-auto'>
            <div className='col-span-3 mr-5'>
                <Mobiles></Mobiles>
            </div>

            <div className='bg-red-200'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Home;