import rasmHero from "../assets/tablet.svg"
export default function Hero(){
    return (
        <section className="py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-medium mb-6 text-gray-800 leading-tight">A Simple Bookmark Manager</h1>
                    <p className="text-gray-500 mb-8 text-lg leading-relaxed">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition">Get it on Chrome</button>
                        <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition">Get it on Firefox</button>
                    </div>
                </div>
                <div>
                    <img src={rasmHero} alt="" />
                </div>
            </div>
        </section>
    )
}