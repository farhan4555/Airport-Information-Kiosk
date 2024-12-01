import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import ScreenBody from './components/ScreenBody';
import BottomBar from './components/BottomBar';

function App() {

  return (
    <>
      <Container
        className="phone-container d-flex flex-column">
        <Header />
        <ScreenBody />
        <BottomBar />
      </Container>
    </>
  )
}




export default App
