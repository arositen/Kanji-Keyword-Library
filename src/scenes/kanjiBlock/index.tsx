import { KanjiEntry } from "@/scenes/shared/types"
import { useTheme } from "@/context/ThemeContext"
import { useState } from "react"

type Props = {
    entry: KanjiEntry
}

const KanjiBlock = ({ entry }: Props) => {

    const { themeMode } = useTheme();

    const [toggleCard, setToggleCard] = useState(false);

    const handleClick = () => {
        setToggleCard(!toggleCard);
        console.log("goggled")
    }

    return (
        <div className={`${themeMode} text-Theme-text-color bg-gradient-to-br from-Theme-kanjiCardbg1 to-Theme-kanjiCardbg2 rounded-2xl m-2 p-2 relative max-w-[1000px] min-h-[250px] flex md:flex-row flex-col justify-start items-center hover:scale-[101%] duration-100`}
            onClick={() => handleClick()}>

            <div className="h-16 w-16 text-5xl font-slack flex justify-center items-center absolute  -top-12 -right-0 m-2 p-2 rounded-full">
                {entry.h_index}
            </div>

            {/* Cool background pattern */}
            <div className="absolute top-0 left-0 w-[100%] h-[100%] overflow-clip pointer-events-none">
                <div className="absolute -translate-x-16 -translate-y-32 m-2 sm:p-5 text-white opacity-15">
                    <div className="text-[200px] font-sans2 flex justify-center -rotate-12 sm:p-5 p-2 m-2">
                        {entry.k_character}
                    </div>
                </div>
            </div>

            <div className={`${!toggleCard ? 'opacity-100' : 'opacity-0'} duration-150 absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 m-2 sm:p-5`}>
                <div className='flex justify-center text-4xl font-slack font-bold p-2'>
                    {entry.keyword.toUpperCase()}
                </div>
                <div className="text-6xl font-sans2 hover:font-sans flex justify-center sm:p-5 p-2 m-2">
                    {entry.k_character}
                </div>
            </div>

            <div className={`${toggleCard ? 'opacity-100' : 'opacity-0'} duration-150 h-full flex flex-col justify-center items-start pl-32 pr-5 opacity-0 pointer-events-none`}>
                <div className="flex justify-end p-2">
                    {entry.story}
                </div>
                <div className="flex flex-col p-2 text-md">
                    <div className="my-1">
                        <span className="font-bold">Kun: </span>{entry.kunreadings.map((r, index) => (
                            <span key={`kun - ${index} - ${entry.h_index}`} className="underline underline-offset-4 mx-2">{r} ,</span>
                        ))}

                    </div>
                    <div className="my-1">
                        <span className="font-bold">On: </span>{entry.onreadings.map((r, index) => (
                            <span key={`on - ${index} - ${entry.h_index}`} className="underline underline-offset-4 mx-2">{r} ,</span>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default KanjiBlock