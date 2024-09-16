import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ResultSection from '../resultSection';
import { useTheme } from "@/context/ThemeContext";

type Props = {}

function searchSection({ }: Props) {

    const { themeMode } = useTheme();

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

    const searchBarStyle = 'flex items-center w-[600px] h-10 text-sm rounded-full px-2'

    return (
        <>
            <section className={`${themeMode} text-Theme-text-color bg-App-bg flex flex-col justify-center items-center w-full`}>
                <div className="flex flex-col justify-center items-center w-full max-w-[1200px] pt-36">
                    <form className=" text-white flex mb-10" onSubmit={(e) => handleSubmit(e)}>
                        <div id='search-bar' className={searchBarStyle}>
                            <MagnifyingGlassIcon className="h-6 text-gray-400 mr-2" />
                            <input type="text" className='w-full h-full px-1 bg-transparent outline-none' placeholder='Search all kanji...' onChange={(e) => setSearchString(e.target.value)} />
                        </div>
                        {/* <button type="submit" className="bg-white mx-2 p-2">Search</button> */}
                    </form>
                </div>
            </section>

            <ResultSection results={searchResults} />
        </>
    )
}

export default searchSection