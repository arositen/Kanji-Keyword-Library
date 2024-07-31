import KanjiBlock from "@/scenes/kanjiBlock";
import { useEffect, useState } from "react";

type Props = {

}

function resultSection({ }: Props) {

    const [kanjiData, setKanjiData] = useState([]);

    const getData = async () => {

        try {
            const response = await fetch('http://localhost:5173/api/firstTenKanji');
            const jsonResponse = await response.json();

            setKanjiData(jsonResponse);

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => getData, [])

    return (
        <section className="p-5 grid md:grid-cols-2 sm:grid-cols-1">
            {kanjiData.map((k, index) => (
                <KanjiBlock key={`kblock - ${index}`} entry={k} />
            ))}
        </section>
    )
}

export default resultSection