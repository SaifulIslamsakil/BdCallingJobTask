import Airlince from "../../Components/Airlince/Airlince";
import Banner from "../../Components/Banner/Banner";
import Blog from "../../Components/Blog/Blog";
import Featured from "../../Components/Featured/Featured";
import Offer from "../../Components/Offer/Offer";
import Subescibe from "../../Components/Subescibe/Subescibe";

const Home = () => {
    return (
        <div className=" space-y-20">
           <Banner></Banner>
           <Featured></Featured>
           <Offer></Offer>
           <Airlince></Airlince>
           <Blog></Blog>
           <Subescibe></Subescibe>
        </div>
    );
};

export default Home;