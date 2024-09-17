import { useTheme } from "@/context/ThemeContext";

const Footer = () => {

    const { themeMode } = useTheme();

    return (

        <div className={`${themeMode} flex justify-between bg-blue-500 w-full h-24 p-10`}>
            <div className="flex flex-col">
                <div>Footer Link</div>
            </div>
            <div className="flex flex-col">
                Footer Link
            </div>
            <div className="flex flex-col">
                Footer Link
            </div>
        </div>
    )
}

export default Footer