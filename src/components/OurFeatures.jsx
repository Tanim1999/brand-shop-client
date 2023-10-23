import { Link } from "react-router-dom";


const OurFeatures = () => {
    return (
        <div>
            <h2 className="text-3xl text-[#800000] text-center font-bold my-5">
                Our Features
            </h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/FsZWBwL/arlington-research-Kz8n-HVg-t-GI-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Get support anytime you need!</h1>
                                <p className="mb-5">At Gadget hub, we take pride in our exceptional support team that stands as the cornerstone of our services. Our dedicated support professionals are not just experts in technology; they are passionate problem solvers committed to ensuring your experience with our services is unparalleled.</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/LzKxpHf/julian-o-hayon-Bs-zng-H79-Ds-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white">We have variety of tech products.</h1>
                                <p className="mb-5 text-white">At Gadget lab, we offer a diverse range of cutting-edge tech products designed to transform the way you work, connect, and innovate. From sleek gadgets to powerful software solutions, our products are crafted with precision and innovation. Discover the future of technology with our offerings:</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/8g41LYZ/shopping-venture-1269166-1920.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Add or remove items in your cart</h1>
                                <p className="mb-5">You can add the items you want to buy and remove it if you have change of mind.</p>
                                <Link to={'/myCart'}>
                                    <button className="btn btn-primary bg-[#800000]">My-cart</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default OurFeatures;