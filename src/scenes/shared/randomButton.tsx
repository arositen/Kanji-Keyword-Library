import { useState } from "react";

type Props = {}

function RandomButton({ }: Props) {

    const [randomKanji, setRandomKanji] = useState('Generate a Character');

    const getData = async () => {

        try {
            const response = await fetch('http://localhost:5173/api/randomKanji');
            const jsonResponse = await response.json();

            setRandomKanji(jsonResponse.k_character);

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <button className="m-2 bg-black text-white" onClick={() => getData()}>Get random kanji</button>
            <div>{randomKanji}</div>
        </>
    )
}

export default RandomButton