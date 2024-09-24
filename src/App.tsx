import '@/index.css'
import Navbar from './scenes/navbar';
import KKDLoadingScreen from './scenes/kkdLoadingScreen';
import SearchSection from "@/scenes/searchSection";
import Footer from '@/scenes/footer';
import ThemeContextProvider from './context/ThemeContext';
import ResultsContextProvider from './context/ResultsContext';

function App() {



  return (
    <ResultsContextProvider>
      <ThemeContextProvider>
        <div className='flex flex-col justify-center mx-auto relative'>
          <KKDLoadingScreen />
          <Navbar />
          <SearchSection />
          <Footer />
        </div>
      </ThemeContextProvider>
    </ResultsContextProvider>
  )
}

export default App
