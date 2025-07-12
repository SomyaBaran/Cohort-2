function Hero() {
    return (
        <section
            style={{ backgroundColor: "#171420" }}
            className="w-full min-h-screen flex items-center justify-center -mt-20"
        >
            <div className="relative w-full max-w-8xl overflow-hidden rounded-[60px]">
                <img
                    src="/background.png"
                    alt="Hero"
                    className="w-full h-[80vh] object-cover rounded-[60px]"
                />

                <div className="absolute top-1/2 left-1/2 w-[1300px] h-[550px] -translate-x-1/2 -translate-y-1/2 bg-white rounded-[50px] shadow-2xl px-16 py-12 flex flex-col justify-center gap-6 z-10">
                    <h1 className="text-8xl font-extrabold leading-none text-[#171420]">
                        CRYPTO'S <br /> FILE STORAGE
                    </h1>

                    <p className="text-2xl text-gray-700 font-100 max-w-2xl">
                        Add IPFS file uploads and retrieval in minutes so you can focus on your app —
                        because you’ve got better things to code than infrastructure.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="min-w-[180px] h-[43px] bg-[#7b5cff] text-white text-lg font-semibold px-6 rounded-full flex items-center justify-center hover:bg-[#582CD6] transition duration-500">
                            Get started
                        </button>

                        <button className="min-w-[180px] h-[43px] bg-teal-400 text-black text-lg font-semibold px-6 rounded-full flex items-center justify-center hover:bg-[#08AA5D] transition duration-500">
                            Read docs
                        </button>


                        <button className="min-w-[180px] h-[43px] bg-[#f27fff] text-black text-lg font-semibold px-6 rounded-full flex items-center justify-center hover:bg-[#C74DF2] transition duration-500">
                            Join discord
                        </button>

                        <button className="min-w-[180px] h-[43px] bg-[#ff9900] text-black text-lg font-semibold px-6 rounded-full flex items-center justify-center hover:bg-[#CC7A00] transition duration-500">
                            Read blog
                        </button>
                    </div>

                </div>
                <div className="absolute bottom-[200px] right-[190px] w-[250px] h-[280px] bg-[#171420] rounded-[40px] z-10">
                    <div className="absolute top-5 left-5 flex items-center gap-3 z-30">
                        <div className="w-4 h-4 bg-[#E579FC] rounded-full"></div>
                        <div className="w-4 h-4 bg-[#FF9902] rounded-full"></div>
                        <div className="w-4 h-4 bg-[#07CC92] rounded-full"></div>
                    </div>

                </div>
                <img
                    src="/horse.svg"
                    alt="Horse"
                    className="absolute bottom-[-260px] right-[100px] w-[430px] z-20"
                />
            </div>
        </section>
    );
}

export default Hero;

