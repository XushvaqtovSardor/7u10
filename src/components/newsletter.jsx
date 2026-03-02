const Newsletter = () => {
    return (
        <section className="py-20 bg-[#5267df] text-white">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <p className="text-sm tracking-[0.3em] mb-6 opacity-90 uppercase font-medium">
                    35,000+ already joined
                </p>
                <h2 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">
                    Stay up-to-date with what we're doing
                </h2>

                <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto items-start">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full flex-1 bg-white px-6 py-3 rounded-md text-gray-800 
                                   border-2 border-transparent
                                   focus:outline-none 
                                   focus:border-dashed 
                                   focus:border-gray-300 
                                   transition-all duration-200"
                    />
                    <button className="w-full md:w-auto bg-[#fa5959] text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#fa5959] border-2 border-[#fa5959] transition-all duration-300 shadow-lg font-medium">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;