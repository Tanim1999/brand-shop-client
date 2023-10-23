import  { useEffect, useState } from 'react';
import Brand from './Brand';

const Brands = () => {
    const [brands,setBrands]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setBrands(data))
    },[])
    return (
        <div>
            <div className='my-10'>
                <h2 className="text-center font-bold text-[#800000] text-3xl">Brands</h2>
            </div>
            <div className="grid  max-w-fit mx-auto gap-5 md:grid-cols-2 lg:grid-cols-3">
                {brands.map(brand=> <Brand key={brands.brandName} brand={brand} ></Brand>)}
            </div>
        </div>
    );
};

export default Brands;