import '@/index.css'
import SearchSection from "@/scenes/searchSection";
import ResultSection from './scenes/resultSection';

function App() {

  return (
    <div className='flex justify-center'>
      <div className='max-w-[2000px]'>
        <SearchSection />
        <ResultSection />
      </div>
    </div>
  )
}

export default App
