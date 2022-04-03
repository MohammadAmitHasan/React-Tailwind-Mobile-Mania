import React from 'react';
import useMobile from '../../Hooks/useMobile';
import Mobile from '../Mobile/Mobile';

const Mobiles = () => {
    const [mobiles, setMobiles] = useMobile();
    return (
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {
                mobiles.map(mobile => <Mobile
                    key={mobile._id}
                    mobile={mobile}
                ></Mobile>)
            }
        </div>

    );
};

export default Mobiles;