import { createContext, useContext, ReactNode, useState } from "react";
import { BASE_URL } from "@/constants";
import { KanjiEntry } from "@/scenes/shared/types";

type ResultsContextProviderProps = {
    children: ReactNode;
}

type ResultsContext = {
    results: KanjiEntry[];
    setResults: ([]: KanjiEntry | any) => void;
    setHomeData: () => void;
}

const ResultsContext = createContext({} as ResultsContext);

export function useResultsContext() {
    return useContext(ResultsContext);
}


export const ResultsContextProvider = ({ children }: ResultsContextProviderProps) => {

    const [results, setResults] = useState([]);

    const setHomeData = async (): Promise<void> => {

        try {
            const response = await fetch(`${BASE_URL}/api/firstTenKanji`);
            const jsonResponse = await response.json();

            setResults(jsonResponse);

        } catch (error) {
            console.error(error)
        }

    };

    return (
        <ResultsContext.Provider
            value={{
                results,
                setResults,
                setHomeData,
            }}>
            {children}
        </ResultsContext.Provider>
    )
}

export default ResultsContextProvider