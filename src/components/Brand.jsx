/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { brandName, logo } = brand
    return (
        <div>
            <Link to={`/brandProducts/${brandName}`}>
            <div className="card bg-[#800000] card-compact w-80 h-60 shadow-xl">
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{brandName}</h2>
                    
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Brand;