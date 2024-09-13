import { KanjiEntry } from "../shared/types"

type Props = {
    entry: KanjiEntry
}

const darkModeStyles = 'from-DarkMode-Gray-400 to-DarkMode-Gray-500 rounded-2xl'

const KanjiBlock = ({ entry }: Props) => {

    return (
        <div className={`${darkModeStyles} m-2 p-2 relative max-w-[1000px] flex md:flex-row flex-col justify-start items-center text-white bg-gradient-to-br`}>
            <div className="h-8 w-8 flex justify-center items-center absolute top-0 right-0 m-2 p-2">
                {entry.h_index}
            </div>

            <div className="flex flex-col justify-center m-2 sm:p-5 p-2">
                <div className="flex justify-center text-2xl font-bold m-2 p-2">
                    {entry.keyword.toUpperCase()}
                </div>
                <div className="text-5xl font-sans2 hover:font-sans flex justify-center sm:p-5 p-2 m-2">
                    {entry.k_character}
                </div>
            </div>

            <div className="flex flex-col px-5">

                <div className="p-2">
                    {entry.story}
                </div>
                <div className="p-2 text-md">
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