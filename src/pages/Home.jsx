import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Faq from "../components/firebase/Faq";


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <div className="my-10">
            <Brands></Brands>
            </div>
            <Faq></Faq>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;