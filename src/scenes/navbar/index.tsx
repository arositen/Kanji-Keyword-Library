import KKDLogo from "../shared/kkdLogo";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useResultsContext } from "@/context/ResultsContext";

function Navbar() {

    const { themeMode, changeTheme } = useTheme();
    const { setHomeData } = useResultsContext();
    const navStyles = `flex items-center mx-4 my-3 text-Theme-text-color`;

    const handleHome = () => {
        setHomeData();
    }

    const toggleTheme = () => {
        changeTheme();
    }

    return (
        <motion.nav className={`${themeMode} bg-App-bg flex justify-center fixed top-0 left-0 z-20 w-full mx-auto`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 80 }}
            transition={{ delay: 3, duration: .68 }}>
            <motion.div className="flex justify-between w-full max-w-[1400px] px-5 "
                initial={{ y: -300 }}
                animate={{ y: 0 }}
                transition={{ delay: 3, duration: .68 }}>
                <button className={`${navStyles} font-sans basis-1/5 justify-start`} onClick={() => handleHome()}>
                    <KKDLogo x={60} y={60} />
                </button>
                <div
                    className={`${navStyles} basis-3/5 justify-center text-5xl font-slack`}>
                    Kanji Keyword Dictionary
                </div>
                <div className={`${navStyles} basis-1/5 justify-end`}>
                    <button className={navStyles} onClick={() => toggleTheme()}>

                        {themeMode === "light" && <MoonIcon className="h-6 w-6 mx-4 text-black" />}
                        {themeMode === "dark" && <SunIcon className="h-6 w-6 mx-4 text-white" />}
                    </button>
                </div>
            </motion.div>
        </motion.nav >
    )
}

export default Navbar