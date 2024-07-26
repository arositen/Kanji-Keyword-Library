import KanjiBlock from "@/scenes/kanjiBlock";
import kanjiData from "@/data/kanjiDatabase.json";

type Props = {

}

function resultSection({ }: Props) {

    return (
        <section className="p-5 grid md:grid-cols-2 sm:grid-cols-1">
            {kanjiData.map((k, index) => (
                <KanjiBlock key={`kblock - ${index}`} entry={k} />
            ))}
        </section>
    )
}

export default resultSection