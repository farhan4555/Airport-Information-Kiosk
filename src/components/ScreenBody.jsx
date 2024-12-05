// everything that isnt the header bar and bottom bar goes here
import LanguageSelector from '../components/LanguageSelector';
import WelcomeScreen from '../components/screens/WelcomeScreen';
import { BrowserRouter, Routes, Route } from "react-router";
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import TransportationScreen from './screens/TransportationScreen.jsx';
import FlightsScreen from './screens/FlightsScreen.jsx';
import WifiScreen from './screens/WifiScreen.jsx';
import TransportationExample from './screens/TransportationExample.jsx';
import SearchExample from './screens/SearchExample.jsx';
import AssistanceScreen from './screens/AssistanceScreen.jsx';
import AssistanceButton from '../components/common/AssistanceButton.jsx';

function ScreenBody() {
  return (
    <div className='screenBody'>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<MapScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/transportation" element={<TransportationScreen />} />
          <Route path="/flights" element={<FlightsScreen />} />
          <Route path="/wifi" element={<WifiScreen />} />
          <Route path="/transportation/calgaryTransit" element={<TransportationExample />} />
          <Route path="/search/washrooms" element={<SearchExample />} />
          <Route path="/*" element={<WelcomeScreen />} />
          <Route path="/assistance" element={<AssistanceScreen />} />
        </Routes>
        <div style={{ display: "flex", height: '10%', width: '100%', marginBottom: "15px", marginTop: "10px" }}>
          <LanguageSelector />
          <AssistanceButton />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default ScreenBody