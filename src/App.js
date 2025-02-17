

import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import ProductCards from './Components/ProductCards';
import Cartpage from './Components/Cartpage';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
<Route path='/' element={<ProductCards/>}  />
<Route path='/cartpage' element={<Cartpage/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
