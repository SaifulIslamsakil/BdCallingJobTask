import img1 from "../../assets/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-1.png"
import img2 from "../../assets/Offer/sliderUp_to_14__discount_on_Domestic_flights 2-2.png"
import img3 from "../../assets/Offer/sliderUp_to_14__discount_on_Domestic_flights 2.png"

const Offer = () => {
    return (
        <div className=" w-11/12 mx-auto space-y-20">
            <h4 className=" font-bold text-4xl">Deals And Offer</h4>
            <div className=" grid  md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4">
                <div className=" flex justify-center items-center gap-3 bg-white rounded-lg shadow-2xl">
                    <img src={img1} alt="" />
                    <div>
                        <h5 className="  font-semibold">With Bkash Payment Only</h5>
                        <p className=" text-blue-700 font-semibold text-xl">Up To Discount On The Base Fare Of Domestic Flight</p>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-3 bg-white rounded-lg shadow-2xl">
                    <img src={img2} alt="" />
                    <div>
                        <h5 className="  font-semibold">With Bkash Payment Only</h5>
                        <p className=" text-blue-700 font-semibold text-xl">Up To Discount On The Base Fare Of Domestic Flight</p>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-3 bg-white rounded-lg shadow-2xl">
                    <img src={img3} alt="" />
                    <div>
                        <h5 className="  font-semibold">With Bkash Payment Only</h5>
                        <p className=" text-blue-700 font-semibold text-xl">Up To Discount On The Base Fare Of Domestic Flight</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;