import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Products from './Components/Products/Products';
import { UserProvider } from './Components/UserContext';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/products' element={<Products/>}></Route>

      </Routes>
    </Router>
    </UserProvider>
  
  )
}

export default App