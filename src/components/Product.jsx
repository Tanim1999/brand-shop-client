import { useLoaderData, useParams } from "react-router-dom";


const Product = () => {
    const products = useLoaderData()
    


    const { _id } = useParams();
    
    const product = products.filter(product => product._id === _id);
    
    

    return (
        <div >
             <div className="card w-96 h-[30 rem] bg-[#FF5D5D] shadow-xl mx-auto my-10">
                            <figure className="px-10 pt-10 h-60 ">
                                <img src={product[0].image} alt="Shoes" className="rounded-xl h-60 w-80" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#800000] font-bold">{product[0].name}</h2>
                                <p>{product[0].shortDescription}</p>
                                <p><span className="text-xl font-bold text-[#800000]">Price:</span>{product[0].price}</p>
                                
                                <p><span className="text-xl font-bold text-[#800000]">Brand:</span>{product[0].brandName}</p>
                                
                                <p><span className="text-xl font-bold text-[#800000]">Ratings:</span>{product[0].rating}</p>

                                
                                <div className="card-actions">
                                    <button className="btn btn-primary bg-[#800000]">Add to cart</button>
                                </div>
                                
                            </div>
                        </div>
            
        </div>
    );
};

export default Product;