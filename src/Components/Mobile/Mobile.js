import React from 'react';

const Mobile = ({ mobile }) => {
    const { name, id, img, brand, price } = mobile;
    return (
        <div className='border-2  rounded-lg shadow-lg relative'>
            <img className='p-2' src={img} alt="" />
            <div className='mb-10 p-3'>
                <h4 className='text-xl'>{name}</h4>
                <h4>Price: <span className='text-yellow-600 font-semibold text-xl'>Tk {price}</span></h4>
                <h5>Brand: {brand}</h5>
            </div>
            <button className='w-28 rounded-tr-lg absolute p-2 h-9 rounded-bl-lg hover:bg-slate-500 bottom-0 text-center bg-slate-400'>Details</button>
            <button className='w-28 rounded-tl-lg right-0 absolute p-2 h-9 rounded-br-lg hover:bg-slate-500 bottom-0 text-center bg-slate-400'>Add To Cart</button>
        </div>
    );
};

export default Mobile;