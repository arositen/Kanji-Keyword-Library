import KKDLogo from "../shared/kkdLogo";
import { MoonIcon } from "@heroicons/react/24/outline";

function Navbar() {

    const navBackground = 'bg-DarkMode-Gray-500';
    const navTextColor = 'text-white';
    const navStyles = `flex items-center mx-4 my-3 font-bold ${navTextColor} text-md`;

    return (
        <nav className={`${navBackground} flex fixed z-20 justify-between w-full`}>
            <div className={navStyles}><KKDLogo color='white' x={60} y={60} /></div>
            <div className={navStyles}>Kanji Keyword Dictionary</div>
            <div className={navStyles}><MoonIcon className="h-6 w-6 mx-4 text-white" /></div>
        </nav >
    )
}

export default Navbar