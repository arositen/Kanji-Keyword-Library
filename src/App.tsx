import '@/index.css'
import Navbar from './scenes/navbar';
import KKDLoadingScreen from './scenes/kkdLoadingScreen';
import SearchSection from "@/scenes/searchSection";

function App() {

  return (
    <>
      <KKDLoadingScreen />
      <Navbar />
      <SearchSection />
    </>

  )
}

export default App
