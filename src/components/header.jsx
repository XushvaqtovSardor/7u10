import rasm1 from "../assets/logo.svg"
export default function Header(){
    return (
         <header className="py-8">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={rasm1} className="w-44 h-8  rounded-full " />
                </div>
                <nav className="flex items-center gap-10">
                    <a href="#features" className="text-sm tracking-widest hover:text-red-500 transition">FEATURES</a>
                    <a href="#pricing" className="text-sm tracking-widest hover:text-red-500 transition">PRICING</a>
                    <a href="#contact" className="text-sm tracking-widest hover:text-red-500 transition">CONTACT</a>
                    <button className="bg-red-500 text-white px-8 py-3 rounded-md text-sm tracking-widest hover:bg-red-600 transition shadow-md">LOGIN</button>
                </nav>
            </div>
        </header>
    )
}