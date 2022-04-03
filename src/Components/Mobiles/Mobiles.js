import React from 'react';
import { useParams } from 'react-router-dom';
import useMobile from '../../Hooks/useMobile';
import Mobile from '../Mobile/Mobile';

const Mobiles = () => {
    const [mobiles, setMobiles] = useMobile();

    let displayMobiles = [];

    const { brand } = useParams();
    console.log(brand);

    if (brand === 'All') {
        displayMobiles = [...mobiles];
    }

    else if (brand === 'Apple') {
        displayMobiles = mobiles.filter(mobile => mobile.brand === 'Apple');
    }

    else if (brand === 'Samsung') {
        displayMobiles = mobiles.filter(mobile => mobile.brand === 'Samsung');
    }

    if (displayMobiles.length) {
        console.log(displayMobiles.length);
        return (
            <div className='grid grid-cols-3 gap-5 mt-5'>
                {
                    displayMobiles.map(mobile => <Mobile
                        key={mobile._id}
                        mobile={mobile}
                    ></Mobile>)
                }
            </div>
        );
    }
    else return (
        <div></div>
    )

};

export default Mobiles;

