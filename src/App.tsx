import '@/index.css'
import Navbar from './scenes/navbar';
import KKDLoadingScreen from './scenes/kkdLoadingScreen';
import SearchSection from "@/scenes/searchSection";
import ThemeContextProvider from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

function App() {

  const { themeMode } = useTheme();

  return (
    <ThemeContextProvider>
      <div className={`w-full h-full bg-[#212529] ${themeMode}`}>
        <div className='flex flex-col justify-center max-w-[1200px] mx-auto relative bg-DarkMode-Gray-600'>
          <KKDLoadingScreen />
          <Navbar />
          <SearchSection />
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
