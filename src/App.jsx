import { BrowserRouter } from "react-router-dom";
import {About, Contact, Hero,
  Navbar, Tech, StarsCanvas,
  Work} from './components';
import 'leaflet/dist/leaflet.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className="relative z-20 bg-primary">
          <Navbar/>
        </div>
        <div className="relative z-0 bg-primary">
          <Hero/>
        </div>
        <div className="relative z-0 bg-primary">
          <About />
          <Tech/>
          <Work />
        </div>
        <div className='relative z-0 bg-primary'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
