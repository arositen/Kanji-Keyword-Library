import { useState, useEffect } from "react";
import ResultSection from '../resultSection';

type Props = {}

function searchSection({ }: Props) {

    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        const getInitialData = async (): Promise<void> => {

            try {
                const response = await fetch('http://localhost:5173/api/firstTenKanji');
                const jsonResponse = await response.json();

                setSearchResults(jsonResponse);

            } catch (error) {
                console.error(error)
            }
        }

        getInitialData();

    }, [])

    const getResults = async (submittedInput: string): Promise<void> => {
        console.log("searching for: ", submittedInput);
        try {
            const response = await fetch(`http://localhost:5173/api/search/${searchString}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setSearchResults(jsonResponse);

        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        getResults(searchString);
    }

    const buttonStyles = ' px-3 mx-3 flex justify-center items-center bg-blue-500';
    const searchBarStyle = 'w-[600px] h-10 text-sm rounded-full pl-10'

    return (
        <>
            <section className="text-white flex flex-col justify-center items-center w-full">
                <h1 className="text-5xl mt-5 p-3">Kanji Keyword Dictionary</h1>
                <h3 className="text-2xl mb-5 font-medium">For Japanese learners using James Heisig's "Remembering the Kanji"</h3>
                <div className="p-2">Look up kanji by entering kun'yomi or on'yomi reading </div>
                <form className=" text-black flex mb-5" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" className={searchBarStyle} placeholder='Seach all kanji...' onChange={(e) => setSearchString(e.target.value)} />
                    {/* <button type="submit" className="bg-white mx-2 p-2">Search</button> */}
                </form>

                <div className="ml-10 flex justify-start w-full">
                    <button className={buttonStyles}>Home</button>
                    <button className={buttonStyles}>Kanji of the day</button>
                    <button className={buttonStyles}>I'm feeling lucky</button>
                </div>
            </section>

            <ResultSection results={searchResults} />
        </>
    )
}

export default searchSection