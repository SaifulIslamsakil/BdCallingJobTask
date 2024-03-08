import { FaRegCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const Banner = () => {
    return (
        <div className=" h-[90vh] w-full flex justify-center items-center" style={{ backgroundImage: `url(https://i.ibb.co/bNSbBP2/Rectangle-2.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" hidden lg:block w-11/12 mx-auto space-y-5">
                <h2 className=" text-4xl font-bold text-white ">Welcome To <span className=" text-blue-700">AirBook</span> </h2>
                <div className=" bg-white rounded-lg px-6 py-10 space-y-9 ">
                    <div className=" flex justify-between items-center">
                        <div className=" flex items-center gap-3">
                            <div className=" bg-slate-100 p-2 rounded-lg">
                                <p className=" flex items-center gap-2 px-1"><FaRegCircle /> One Way</p>
                            </div>
                            <div className=" bg-blue-700 text-white  p-2 rounded-lg">
                                <p className=" flex items-center gap-2 px-1"><FaRegCircle /> Round Trip</p>
                            </div>
                        </div>
                        <div className=" flex items-center gap-3">
                            <div>
                                <select className=" bg-slate-100 p-2 rounded-lg" name="" id="">
                                    <option value="1 Traveller">1 Traveller</option>
                                    <option value="1 Traveller">1 Traveller</option>
                                    <option value="1 Traveller">1 Traveller</option>
                                </select>
                            </div>
                            <div>
                                <select className=" bg-slate-100 p-2 rounded-lg" name="" id="">
                                    <option value="1 Traveller">Economy</option>
                                    <option value="1 Traveller">Economy</option>
                                    <option value="1 Traveller">Economy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className=" flex gap-3">
                        <div className=" grid grid-cols-4 gap-3">
                            <div className=" border-2 p-1  rounded-lg flex items-center space-y-2">
                                <p className=" border-r-2 px-2 font-bold text-lg ">DAC</p>
                                <p className=" px-2"><span className=" font-bold">Dhaka</span> <br /> Hazrat shahjalal interatio</p>
                            </div>
                            <div className=" border-2 p-1  rounded-lg flex items-center space-y-2">
                                <p className=" border-r-2 px-2 font-bold text-lg ">CBX</p>
                                <p className=" px-2"><span className=" font-bold">CoxBazar</span> <br /> CoxBazar interatio</p>
                            </div>
                            <div className=" border-2 p-1  rounded-lg flex items-center space-y-2">
                                <p className=" border-r-2 px-2 font-bold text-lg ">03</p>
                                <p className=" px-2"><span className=" font-bold">Feb</span> <br /> Tue 2024</p>
                            </div>
                            <div className=" border-2 p-1  rounded-lg flex items-center space-y-2">
                                <p className=" border-r-2 px-2 font-bold text-lg ">08</p>
                                <p className=" px-2"><span className=" font-bold">Mar</span> <br /> Tue 2024</p>
                            </div>
                        </div>
                        <div className=" bg-yellow-400 text-white flex items-center justify-center px-10 rounded-lg text-3xl ">
                            <IoSearch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;