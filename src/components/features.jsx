import { useState } from "react"
import simpleBookmarkingImg from '../assets/slide/simple-bokmarking.svg'
import speedySearchingImg from '../assets/slide/speedy-searching.svg'
import easySharingImg from '../assets/slide/easy-sharing.svg'
import backgroundpic from '../assets/bg.svg'

export default function FEATURES() {
    const [activeTab, setActiveTab] = useState('simple')

    const features = {
        simple: {
            title: 'Bookmark in one click',
            description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            image: simpleBookmarkingImg
        },
        speedy: {
            title: 'Intelligent search',
            description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
            image: speedySearchingImg
        },
        easy: {
            title: 'Share your bookmarks',
            description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
            image: easySharingImg
        }
    }

    return (
        <section id="features" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">Features</h2>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        Our aim is to make it quick and easy for you to access your favourite websites.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center mb-20 max-w-2xl mx-auto border-b md:border-none">
                    {Object.keys(features).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-10 py-4 border-b-4 transition-all duration-300 ${activeTab === tab
                                    ? 'border-red-500 text-gray-800'
                                    : 'border-transparent text-gray-500 hover:text-red-500'
                                }`}
                        >
                            <span className="font-medium">
                                {tab === 'simple' ? 'Simple Bookmarking' : tab === 'speedy' ? 'Speedy Searching' : 'Easy Sharing'}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="relative">
                        <div className="absolute top-6/9 -translate-y-1/3 -left-40 md:-left-60 lg:-left-80 w-[800px] md:w-[760px] -z-0">
                            <img
                                src={backgroundpic}
                                alt=""
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="relative z-10 flex justify-center">
                            <img
                                key={activeTab}
                                src={features[activeTab].image}
                                alt={features[activeTab].title}
                                className="max-w-full h-auto transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left z-20">
                        <h3 className="text-3xl font-bold mb-6">{features[activeTab].title}</h3>
                        <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                            {features[activeTab].description}
                        </p>
                        <button className="bg-blue-600 text-white px-7 py-3 rounded shadow-md hover:bg-blue-700 transition">
                            More Info
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}