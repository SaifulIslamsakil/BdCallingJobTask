import img from "../../assets/logo/Isolation_Mode.png"
const Subescibe = () => {
    return (
        <div className=' lg:h-[80vh] w-full md:flex justify-between gap-5 items-center p-10 space-y-4'>
            <div className=" flex justify-end flex-1">
                <img className=" mx-auto md:w-96" src={img} alt="" />
            </div>
            <div className=" flex-1 ">
                <form action="" className=" space-y-7">
                    <h1 className=" text-4xl font-bold text-5 npm install swiperxl">Subcribe To Our <br /> NewsLatter !</h1>
                    <p className=" text-blue-700 text-xl font-semibold"> Subcribe To Our NewsLatter And <br /> Stay Update</p>
                    <input className=" w-full p-3 rounded-lg border border-blue-700 outline-none" type="text" placeholder="Enter Your Email " />
                    <button className=" w-full py-3 bg-yellow-400 rounded-lg text-xl font-semibold">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Subescibe;