
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import LandingPage from './pages/LandingPage';
import { UserProvider } from './UserContext';
import Game from "../src/extras/game/Game"

function App() {
  return (
   <div>
     <UserProvider>
     <Routes>
      <Route>
        <Route index element={ <LandingPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/game' element={<Game/>} />
      </Route>
    </Routes>
    </UserProvider>
   
   
    
   </div>
)}

export default App;
