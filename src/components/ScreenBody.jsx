// everything that isnt the header bar and bottom bar goes here
import LanguageSelector from '../components/LanguageSelector';
import WelcomeScreen from '../components/screens/WelcomeScreen';
import { BrowserRouter, Routes, Route } from "react-router";
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import TransportationScreen from './screens/TransportationScreen.jsx';
import FlightsScreen from './screens/FlightsScreen.jsx';
import WifiScreen from './screens/WifiScreen.jsx';



function ScreenBody() {
  return (
    <div className='screenBody'>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<MapScreen/>} />
          <Route path="/search" element={<SearchScreen/>} />
          <Route path="/transportation" element={<TransportationScreen/>} />
          <Route path="/flights" element={<FlightsScreen/>} />
          <Route path="/wifi" element={<WifiScreen/>} />
          <Route path="/*" element={<WelcomeScreen />} />
        </Routes>
      </BrowserRouter>
      <LanguageSelector />
    </div>
  )
}

export default ScreenBody