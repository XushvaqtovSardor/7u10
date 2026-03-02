import rasm1 from "../assets/logo-white.svg"
import facebook from '../assets/social/facebook.svg'
import twitter from '../assets/social/twitter.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                        <img src={rasm1} className="w-[150px] h-6     rounded-full " />
                    </div>
                    <nav className="flex gap-8">
                        <a href="#features" className="text-sm tracking-widest hover:text-red-500 transition">FEATURES</a>
                        <a href="#pricing" className="text-sm tracking-widest hover:text-red-500 transition">PRICING</a>
                        <a href="#contact" className="text-sm tracking-widest hover:text-red-500 transition">CONTACT</a>
                    </nav>
                </div>
                <div className="flex gap-8">
                   <a href="#" className="hover:opacity-80 transition">
                        <img src={facebook} alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition">
                        <img src={twitter} alt="Twitter" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
