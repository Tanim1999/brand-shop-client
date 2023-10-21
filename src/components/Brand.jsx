/* eslint-disable react/prop-types */


const Brand = ({ brand }) => {
    const { brandName, logo } = brand
    return (
        <div>
            <div className="card bg-[#800000] card-compact w-80 h-60 shadow-xl">
                <figure><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{brandName}</h2>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Brand;