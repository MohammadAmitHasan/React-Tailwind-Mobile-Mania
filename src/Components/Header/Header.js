import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='h-12 w-full bg-slate-800 text-yellow-100 sticky'>
            <div className='h-12 container mx-auto flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl'>Mobile Mania</h3>
                </div>
                <div className='flex text-xl'>
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/about'}>About</CustomLink>
                    <CustomLink to={'/contact'}>Contact Us</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;