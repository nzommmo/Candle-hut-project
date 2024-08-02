import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Products from './Components/Products';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/products' element={<Products/>}></Route>

      </Routes>
    </Router>
  
  )
}

export default App