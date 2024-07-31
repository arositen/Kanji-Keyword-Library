import '@/index.css'
import SearchSection from "@/scenes/searchSection";
import ResultSection from './scenes/resultSection';
import RandomButton from './scenes/shared/randomButton';
import { useState, useEffect } from 'react';

function App() {

  const [kanjiData, setKanjiData] = useState(null);

  const getData = async () => {

    try {
      const response = await fetch('http://localhost:5173/api/firstKanji');
      const json = await response.json();

      setKanjiData(json[0].kcharacter);

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => getData, [])

  return (
    <div className='flex justify-center'>
      <div className='max-w-[2000px]'>
        <SearchSection />
        <div>{kanjiData}</div>
        <RandomButton />
        <ResultSection />
      </div>
    </div>
  )
}

export default App
