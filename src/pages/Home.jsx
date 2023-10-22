import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <div className="my-10">
            <Brands></Brands>
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;