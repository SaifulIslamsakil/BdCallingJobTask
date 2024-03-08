import img1 from "../../assets/Thumbul/Rectangle 18-1.png"
import img2 from "../../assets/Thumbul/Rectangle 18-11.png"
import img3 from "../../assets/Thumbul/Rectangle 18-2.png"
import img4 from "../../assets/socal/Rectangle 30.png"
import img5 from "../../assets/socal/Rectangle 32.png"
import img6 from "../../assets/socal/Rectangle 33.png"

import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
    return (
        <div>
            <div className=" w-11/12 mx-auto space-y-10 ">
                <h2 className=" font-bold text-4xl">Travel Blog</h2>
                <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className=" p-3 rounded-lg space-y-4 shadow-2xl">
                        <img className=" mx-auto" src={img1} alt="" />
                        <div className=" space-y-5">
                            <p className=" font-semibold px-2">Work And Travel <span className=" text-yellow-500">16 September 2026 </span></p>
                            <h4 className=" font-bold text-2xl px-2">Stopover Opportunity In Istanbul With Turkihs Airlines</h4>
                            <div className=" border-t-2 p-2 flex justify-between">
                                <div className=" flex items-center gap-3 ">
                                    <img className=" w-12 h-12 rounded-full object-cover" src={img4} alt="" />
                                    <p className=" font-semibold">Saiful Islam</p>
                                </div>
                                <p className=" flex text-yellow-400 items-center">Read More <span className=" flex items-center"><IoIosArrowForward /> <IoIosArrowForward /></span></p>
                            </div>
                        </div>
                    </div>
                    <div className=" p-3 rounded-lg space-y-4 shadow-2xl">
                        <img className=" mx-auto" src={img2} alt="" />
                        <div className=" space-y-5">
                            <p className=" font-semibold px-2">Work And Travel <span className=" text-yellow-500">16 September 2026 </span></p>
                            <h4 className=" font-bold text-2xl px-2">Stopover Opportunity In Istanbul With Turkihs Airlines</h4>
                            <div className=" border-t-2 p-2 flex justify-between">
                                <div className=" flex items-center gap-3 ">
                                    <img className=" w-12 h-12 rounded-full object-cover" src={img4} alt="" />
                                    <p className=" font-semibold">Saiful Islam</p>
                                </div>
                                <p className=" flex text-yellow-400 items-center">Read More <span className=" flex items-center"><IoIosArrowForward /> <IoIosArrowForward /></span></p>
                            </div>
                        </div>
                    </div>
                    <div className=" p-3 rounded-lg space-y-4 shadow-2xl">
                        <img className=" mx-auto" src={img3} alt="" />
                        <div className=" space-y-5">
                            <p className=" font-semibold px-2">Work And Travel <span className=" text-yellow-500">16 September 2026 </span></p>
                            <h4 className=" font-bold text-2xl px-2">Stopover Opportunity In Istanbul With Turkihs Airlines</h4>
                            <div className=" border-t-2 p-2 flex justify-between">
                                <div className=" flex items-center gap-3 ">
                                    <img className=" w-12 h-12 rounded-full object-cover" src={img4} alt="" />
                                    <p className=" font-semibold">Saiful Islam</p>
                                </div>
                                <p className=" flex text-yellow-400 items-center">Read More <span className=" flex items-center"><IoIosArrowForward /> <IoIosArrowForward /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;