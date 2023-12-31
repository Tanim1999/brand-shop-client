import { Link, useLoaderData, useParams } from "react-router-dom";


const BrandProducts = () => {
    const products = useLoaderData()
    console.log(products)

    const { brandName } = useParams();
    const filteredProducts = products.filter(product => product.brandName === brandName);

    if (filteredProducts.length === 0) {
        return <div className="alert alert-info my-20 max-w-fit mx-auto bg-[#800000] text-white text-2xl font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>There is no product available for this brand</span>
        </div>;
    }

    return (
        <div >

            <div className="carousel w-full h-[90%] mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-contain" style={{ backgroundImage: `url(${filteredProducts[0].image})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{filteredProducts[0].name}</h1>
                                <p className="mb-5 text-white font-xl font-semibold">{filteredProducts[0].shortDescription}</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-contain" style={{ backgroundImage: `url(${filteredProducts[1].image})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{filteredProducts[1].name}</h1>
                                <p className="mb-5 text-white font-xl font-semibold">{filteredProducts[1].shortDescription}</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-contain" style={{ backgroundImage: `url(${filteredProducts[2].image})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{filteredProducts[2].name}</h1>
                                <p className="mb-5 text-white font-xl font-semibold">{filteredProducts[2].shortDescription}</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-contain" style={{ backgroundImage: `url(${filteredProducts[3].image})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{filteredProducts[3].name}</h1>
                                <p className="mb-5 text-white font-xl font-semibold">{filteredProducts[3].shortDescription}</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <p className="text-3xl font-bold text-[#800000] my-10 text-center">
                Products
            </p>
            <div className="grid gap-5 my-10  grid-cols-1 md:grid-cols-2 max-w-fit mx-auto ">

                {filteredProducts.map(product => (
                    < >

                        <div className="card w-96 h-[30 rem] bg-[#FF5D5D] shadow-xl">
                            <figure className="px-10 pt-10 h-60 ">
                                <img src={product.image} alt="Shoes" className="rounded-xl h-60 w-80" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-[#800000] font-bold">{product.name}</h2>
                                <p>{product.shortDescription}</p>
                                <p><span className="text-xl font-bold text-[#800000]">Price:</span>{product.price}</p>
                                <div className=" card-actions">
                                    <Link to={`product/${product._id}`}>

                                        <button className="btn btn-primary bg-[#800000]">Details</button>

                                    </Link>
                                    <Link to={`/updateProduct/${product._id}`}>
                                        <button className="btn btn-primary bg-[#800000]">Update</button>

                                    </Link>
                                </div>
                            </div>
                        </div>

                    </>

                ))}
            </div>
        </div>
    );

};

export default BrandProducts;