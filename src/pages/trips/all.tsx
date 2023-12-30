
import LayoutMain from '../../lib/components/layout/LayoutMain';

import  Map  from '$/lib/components/map/Map'; 
import Slider from '$/lib/components/button/slider/Slider';
import { useState } from 'react';
import Button from '$/lib/components/button/Button';

const All: React.FC = () => {
        const center: google.maps.LatLngLiteral =  { lat: 50.463727, lng: 3.938247 };
        const zoom: number = 12;
        const markerPosition: google.maps.LatLngLiteral = { lat: 50.463727, lng: 3.938247 };

        const [checked, setChecked] = useState(false);

        const handleCheck = () => {
          setChecked(!checked);
        };
    
        return (
            <>
                <LayoutMain>
                    <div className="bg-[var(--purple-g3)]">
                        <div className=" flex flex-row items-center justify-between mt-4 mx-4">
                            <Slider check={handleCheck} checked={checked} classSlider='' />
                            <h1 className="md:text-6xl text-3xl font-bold mb-4 mt-4  w-[50%] text-center text-fuchsia-700">Trips</h1>
                            <Button href="/trips/new" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md">New Trip</Button>
                        </div>
                        <div className='flex flex-col items-center'>  
                            
                                <div className='border-b-t-2 border-0 border-white'>   
                                    <div className='md:text-4xl text-2xl mx-12 bg-[var(--purple-g3)] text-center rounded-[10%] p-4 mb-4 text-fuchsia-700 border-fuchsia-700 border-2 '>                    
                                        <p>Find the best trip</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div>
                        {/* ------------------------------------- display list --------------------------------------------- */}
                        {checked && (
                            <>   
                                <p className="text-4xl text-white font-bold">Display list of trips </p>
                                {/* 
                                    TODO : Component ListTrips & ListTripsItem
                                */}
                            </>
                        )}
                        {/* -------------------------------------- display map ---------------------------------------------- */}
                        {!checked && <Map center={center} zoom={zoom} markerPosition={markerPosition} />}
                    </div>
                </LayoutMain>
            </>
        );
    };
    
export default All;