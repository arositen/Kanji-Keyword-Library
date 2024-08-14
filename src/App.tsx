import '@/index.css'
import ConvertToKanaTest from './scenes/searchSection/convertToKanaTest';
import SearchSection from "@/scenes/searchSection";

function App() {

  return (
    <div className='fixed flex justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-[#363638] via-[#58585c] to-[#363638] overflow-auto'>
      <div className='flex w-full max-w-[2000px] flex-col px-16'>
        <ConvertToKanaTest />
        <SearchSection />
      </div>
    </div>
  )
}

export default App
