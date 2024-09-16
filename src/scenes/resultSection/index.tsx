import KanjiBlock from "@/scenes/kanjiBlock";
import NoResults from "./noResults";
import { KanjiEntry } from "../shared/types";
import { useTheme } from "@/context/ThemeContext";

type Props = {
    results: KanjiEntry[],
}

function resultSection({ results }: Props) {

    const { themeMode } = useTheme();

    return (
        <section className={`${themeMode} bg-App-bg w-full flex justify-center`}>
            <div className="p-5 max-w-[1200px] grid gap-5 sm:grid-cols-2 grid-cols-1">
                {results.length === 0 && <div className="w-full md:col-span-2 sm:col-span-1">
                    <NoResults />
                </div>}

                {(results.length !== 0) && results.map((k, index) => (
                    <KanjiBlock key={`kblock - ${index}`} entry={k} />
                ))}
            </div>
        </section>
    )
}

export default resultSection