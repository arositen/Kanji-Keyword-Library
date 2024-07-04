
type Props = {}

function searchSection({ }: Props) {
    return (
        <section className="flex flex-col justify-center items-center w-full bg-slate-500">
            <h1 className="text-5xl mt-5 p-3">Kanji Keyword Dictionary</h1>
            <h3 className="text-2xl mb-5">For Japanese learners using James Heisig's "Remembering the Kanji"</h3>
            <div className="p-2">Look up kanji by entering kun'yomi or on'yomi reading </div>
            <div className="flex mb-5">
                <input type="text" className="" />
                <button className="bg-white mx-2 p-2">Search</button>
            </div>
        </section>
    )
}

export default searchSection