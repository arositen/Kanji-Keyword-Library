import KKDLogo from "../shared/kkdLogo";
import { MoonIcon } from "@heroicons/react/24/outline";

function Navbar() {

    const navBackground = 'bg-DarkMode-Gray-500';
    const navTextColor = 'text-white';
    const navStyles = `flex items-center mx-4 my-3 font-bold ${navTextColor} text-md`;

    const handleHome = () => {
        console.log("hello world");
    }

    return (
        <nav className={`${navBackground} flex fixed z-20 justify-between w-full`}>
            <button className={navStyles} onClick={() => handleHome()}>
                <KKDLogo color='white' x={60} y={60} />
            </button>
            <div className={navStyles}>Kanji Keyword Dictionary</div>
            <div className={navStyles}>
                <div className={navStyles}>Kanji of the Day</div>
                <button className={navStyles}>
                    <MoonIcon className="h-6 w-6 mx-4 text-white" />
                </button>
            </div>
        </nav >
    )
}

export default Navbar