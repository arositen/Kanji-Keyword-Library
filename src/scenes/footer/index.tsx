import { useTheme } from "@/context/ThemeContext";

const Footer = () => {

    const { themeMode } = useTheme();

    return (

        <div className={`${themeMode} w-full flex justify-center items-center bg-App-bg`}>
            <div className={`${themeMode} font-slack text-3xl flex justify-around text-Theme-text-color w-full max-w-[1200px] p-10 border-solid border-t-2 border-[#0000002c]`}>
                <div className="flex flex-col">
                    <div>FAQ</div>
                    <div>Buy me a coffee!</div>
                </div>
                <div className="flex flex-col">
                    socials
                </div>

            </div>
        </div>
    )
}

export default Footer