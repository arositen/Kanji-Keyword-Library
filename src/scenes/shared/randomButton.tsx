type Props = {}

function RandomButton({ }: Props) {

    // Function to retrieve the first row from the kanjitest table
    async function getFirstRowFromKanjiTest() {
        console.log("hi there you");
    }

    return (
        <button className="m-2 bg-black text-white" onClick={() => getFirstRowFromKanjiTest()}>Get random kanji</button>
    )
}

export default RandomButton