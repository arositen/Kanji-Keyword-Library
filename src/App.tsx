import '@/index.css'
import Navbar from './scenes/navbar';
import KKDLoadingScreen from './scenes/kkdLoadingScreen';
import SearchSection from "@/scenes/searchSection";
import Footer from '@/scenes/footer';
import ThemeContextProvider from './context/ThemeContext';

function App() {



  return (
    <ThemeContextProvider>
      <div className='flex flex-col justify-center mx-auto relative'>
        <KKDLoadingScreen />
        <Navbar />
        <SearchSection />
        <Footer />
      </div>
    </ThemeContextProvider>
  )
}

export default App
