import img1 from "../../assets/Thumbul/Rectangle 18-22.png"
import img2 from "../../assets/Thumbul/Rectangle 18-11.png"
import img3 from "../../assets/Thumbul/Rectangle 181.png"
const Featured = () => {
    return (
        <div className=" w-11/12 mx-auto space-y-10 ">
            <h2 className=" font-bold text-4xl">Featured Destinations</h2>
            <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                <div className=" p-3 rounded-lg space-y-4 shadow-2xl">
                    <img className=" mx-auto" src={img1} alt="" />
                    <div className=" space-y-5">
                        <h4 className=" font-bold text-2xl px-2">Stopover Opportunity In Istanbul With Turkihs Airlines</h4>
                        <div className=" flex justify-center">
                            <button className=" bg-yellow-400 py-3 px-9 text-center font-semibold text-xl rounded-lg ">View More </button>
                        </div>
                    </div>
                </div>
                <div className=" p-3 rounded-lg space-y-4 shadow-2xl">
                    <img className=" mx-auto" src={img2} alt="" />
                    <div className=" space-y-5">
                        <h4 className=" font-bold text-2xl px-2">Stopover Opportunity In Istanbul With Turkihs Airlines</h4>
                        <div className=" flex justify-center">
                            <button className=" bg-yellow-400 py-3 px-9 text-center font-semibold text-xl rounded-lg ">View More </button>
                        </div>
                    </div>
                </div>
                <div className=" p-3 rounded-lg space-y-4 shadow-2xl">
                    <img className=" mx-auto" src={img3} alt="" />
                    <div className=" space-y-5">
                        <h4 className=" font-bold text-2xl px-2">Stopover Opportunity In Istanbul With Turkihs Airlines</h4>
                        <div className=" flex justify-center">
                            <button className=" bg-yellow-400 py-3 px-9 text-center font-semibold text-xl rounded-lg ">View More </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;