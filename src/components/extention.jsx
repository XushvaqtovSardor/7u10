import chromeLogo from '../assets/browser/chroome.svg'
import firefoxLogo from '../assets/browser/firefox.svg'
import operaLogo from '../assets/browser/opera.svg'
import bgDots from '../assets/bg-dote.svg' 

export default function Extensions() { 
    const extensionData = [ 
        {
            browser: 'Chrome',
            minVersion: '62',
            image: chromeLogo,
            offset: '' 
        },
        {
            browser: 'Firefox',
            minVersion: '55',
            image: firefoxLogo,
            offset: 'md:mt-10' 
        },
        {
            browser: 'Opera',
            minVersion: '46',
            image: operaLogo,
            offset: 'md:mt-20' 
        }
    ]

    return (
        <section className="py-20" id="download">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-medium mb-6 text-gray-800">Download the extension</h2>
                <p className="text-gray-500 mb-16 max-w-lg mx-auto">
                    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
                </p>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {extensionData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`bg-white rounded-xl shadow-lg flex flex-col items-center pt-10 pb-6 relative ${item.offset}`}
                        >
                            <div className="mb-8">
                                <img src={item.image} alt={`${item.browser} logo`} className="w-24 h-24" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-gray-800">Add to {item.browser}</h3>
                            <p className="text-gray-500 text-sm mb-8">Minimum version {item.minVersion}</p>
                             <div className="w-full mb-6">
                                <img src={bgDots} alt="dots" className="w-full object-contain" />
                            </div>
                            <div className="px-6 w-full">
                                <button className="bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-transparent transition-all duration-300 w-full font-medium">
                                    Add & Install Extension
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}