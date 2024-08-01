import '@/index.css'
import SearchSection from "@/scenes/searchSection";
import RandomButton from './scenes/shared/randomButton';

function App() {

  return (
    <div className='flex justify-center'>
      <div className='max-w-[2000px]'>
        <SearchSection />
        <RandomButton />
      </div>
    </div>
  )
}

export default App
