import { KanjiEntry } from "../shared/types"

type Props = {
    kanji: KanjiEntry
}

const kanjiBlock = ({ kanji }: Props) => {
    return (
        <div className="m-2 p-2 relative max-w-[1000px] flex justify-start items-center border-gray-600 border-2">
            <div className="absolute top-0 left-0 mx-2 my-1">
                {kanji.hIndex}.
            </div>
            <div className="absolute bottom-0 right-0 mx-2 my-1">
                {kanji.primitiveNotes && (<span className="text-sm underline underline-offset-2">As Primitive</span>)}
            </div>

            <div className="flex flex-col justify-center m-2 p-5">
                <div className="flex justify-center text-2xl font-bold m-2 p-2">
                    {kanji.keyword.toUpperCase()}
                </div>
                <div className="text-5xl font-sans2 hover:font-sans border-2 border-gray-400 p-8 m-2">
                    {kanji.character}
                </div>
            </div>

            <div className="flex flex-col px-5">

                <div className="p-2">
                    {kanji.story}
                </div>
                {kanji.readings && (<div className="p-2 text-md">
                    <div className="my-1">
                        <span className="font-bold">Kun: </span>{kanji.readings.kunyomi.map(r => (
                            <span className="underline underline-offset-4 mx-2">{r} ,</span>
                        ))}

                    </div>
                    <div className="my-1">
                        <span className="font-bold">On: </span>{kanji.readings.onyomi.map(r => (
                            <span className="underline underline-offset-4 mx-2">{r} ,</span>
                        ))}
                    </div>

                </div>)}
            </div>
        </div>
    )
}

export default kanjiBlock