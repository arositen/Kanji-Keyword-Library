import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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

    const searchBarStyle = 'flex items-center w-[600px] h-10 text-sm rounded-full px-2 shadow-[-10px_3px_20px_-10px] shadow-[#6c757d]'

    return (
        <>
            <section className="text-white flex flex-col justify-center items-center w-full pt-36">
                <h3 className="text-2xl mb-5 font-medium">For Japanese learners using James Heisig's "Remembering the Kanji"</h3>
                <div className="p-2">Look up kanji by entering kun'yomi or on'yomi reading </div>
                <form className=" text-white flex mb-10" onSubmit={(e) => handleSubmit(e)}>
                    <div className={searchBarStyle}>
                        <MagnifyingGlassIcon className="h-6 text-gray-400 mr-2" />
                        <input type="text" className='w-full h-full px-1 bg-transparent outline-none' placeholder='Seach all kanji...' onChange={(e) => setSearchString(e.target.value)} />
                    </div>
                    {/* <button type="submit" className="bg-white mx-2 p-2">Search</button> */}
                </form>

            </section>

            <ResultSection results={searchResults} />
        </>
    )
}

export default searchSection