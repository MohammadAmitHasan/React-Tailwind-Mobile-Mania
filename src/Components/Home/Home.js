import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Mobiles from '../Mobiles/Mobiles';

const Home = () => {
    const navigate = useNavigate();

    const appleButtonHandle = () => {
        const path = `/home/Apple`;
        navigate(path);
    }

    const samsungButtonHandle = () => {
        const path = `/home/Samsung`;
        navigate(path);
    }

    return (
        <div className='grid grid-cols-4 container mx-auto'>
            <div className='col-span-3 mr-5'>
                <div className='text-center mt-6'>
                    <Link to={'/home/All'}>
                        <button className='bg-blue-300 py-1 px-3 m-2 rounded-lg'>All</button>
                    </Link>
                    <button onClick={samsungButtonHandle} className='bg-blue-300 py-1 px-3 m-2 rounded-lg'>Samsung</button>
                    <button onClick={appleButtonHandle} className='bg-blue-300 py-1 px-3 m-2 rounded-lg'>Apple</button>
                </div>
                <Outlet></Outlet>
                <Mobiles></Mobiles>
            </div>

            <div className='bg-red-200'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Home;