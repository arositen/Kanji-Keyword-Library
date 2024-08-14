import KanjiBlock from "@/scenes/kanjiBlock";
import NoResults from "./noResults";
import { KanjiEntry } from "../shared/types";

type Props = {
    results: KanjiEntry[],
}

function resultSection({ results }: Props) {

    return (
        <section className="p-5 grid gap-5 md:grid-cols-2 sm:grid-cols-1">
            {results.length === 0 && <div className="w-full md:col-span-2 sm:col-span-1">
                <NoResults />
            </div>}

            {(results.length !== 0) && results.map((k, index) => (
                <KanjiBlock key={`kblock - ${index}`} entry={k} />
            ))}

        </section>
    )
}

export default resultSection