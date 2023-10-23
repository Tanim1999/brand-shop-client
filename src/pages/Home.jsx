import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import OurFeatures from "../components/OurFeatures";
import Faq from "../components/firebase/Faq";


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <div className="my-10">
            <Brands></Brands>
            </div>
            <OurFeatures></OurFeatures>
            <Faq></Faq>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;