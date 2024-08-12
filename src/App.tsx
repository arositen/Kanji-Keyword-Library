import '@/index.css'
import ConvertToKanaTest from './scenes/searchSection/convertToKanaTest';
import SearchSection from "@/scenes/searchSection";

function App() {

  return (
    <div className='flex justify-center w-[100vw]'>
      <div className='flex w-full max-w-[2000px] flex-col'>
        <ConvertToKanaTest />
        <SearchSection />

      </div>
    </div>
  )
}

export default App
