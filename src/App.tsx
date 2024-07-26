import '@/index.css'
import SearchSection from "@/scenes/searchSection";
import ResultSection from './scenes/resultSection';
import RandomButton from './scenes/shared/randomButton';

function App() {

  return (
    <div className='flex justify-center'>
      <div className='max-w-[2000px]'>
        <SearchSection />
        <RandomButton />
        <ResultSection />
      </div>
    </div>
  )
}

export default App
