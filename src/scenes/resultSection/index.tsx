import KanjiBlock from "@/scenes/kanjiBlock";
import { KanjiEntry } from "../shared/types";

type Props = {
    results: KanjiEntry[],
}

function resultSection({ results }: Props) {

    return (
        <section className="p-5 grid md:grid-cols-2 sm:grid-cols-1">
            {results.map((k, index) => (
                <KanjiBlock key={`kblock - ${index}`} entry={k} />
            ))}
        </section>
    )
}

export default resultSection