import '@/index.css'
import Navbar from './scenes/navbar';
import KKDLoadingScreen from './scenes/kkdLoadingScreen';
import SearchSection from "@/scenes/searchSection";

function App() {

  return (
    <div className='w-full h-full bg-[#212529]'>
      <div className='flex flex-col justify-center max-w-[1200px] mx-auto relative bg-DarkMode-Gray-600'>
        <KKDLoadingScreen />
        <Navbar />
        <SearchSection />
      </div>
    </div>

  )
}

export default App
