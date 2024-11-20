import KanjiBlock from "@/scenes/kanjiBlock";
import { KanjiEntry } from "../shared/types";
import { useTheme } from "@/context/ThemeContext";

type Props = {
    results: KanjiEntry[],
}

function resultSection({ results }: Props) {

    const { themeMode } = useTheme();

    return (
        <>
            {/* If no results, no results page dialogue */}
            {results.length === 0 &&
                <section className={`${themeMode} flex-1 text-Theme-text-color bg-App-bg w-full flex justify-center pb-10`}>


                    <div className="flex flex-col h-full justify-center items-center w-full md:col-span-2 sm:col-span-1">
                        {/* <NoResults /> */}
                        <div className="text-5xl font-slack flex w-full justify-center mb-4 pt-16">No Results</div>
                        <p>Search one pronunciation at a time. You can search in romaji, hiragana, or katakana.</p>
                        <p>For example "shi", "し", or "シ" are all viable search terms.</p>
                    </div>
                </section>
            }
            {/* If results, display results */}
            {(results.length !== 0) &&
                <div className={`${themeMode} flex-1 bg-App-bg`}>
                    <section className={`${themeMode} h-full text-Theme-text-color bg-App-bg w-full flex justify-center pb-10`}>
                        <div className="p-5 max-w-[1200px] grid gap-5 sm:grid-cols-2 grid-cols-1">
                            {results.map((k, index) => (
                                <KanjiBlock key={`kblock - ${index}`} entry={k} />
                            ))}
                        </div>
                    </section>
                </div>
            }

        </>
    )
}

export default resultSection