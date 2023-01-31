
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Bio from './components/Bio'
import Home from './components/Home'
import Resume from './components/Resume'
import Work from './components/Work'
import Navbar from './components/Navbar'





function App() {
  return (
   
      <Router>
    <div className='App'>
      <Navbar />
      <Routes>
     <Route exact path="/home" element={< Home/>}/>
     <Route exact path="/contact"element={< Bio />}/>
     <Route exact path="/portfolio"element={< Work />}/>
     <Route exact path="/resume"element={< Resume />}/>
     
     
     </Routes>

    </div>
    
    </Router>
  
 
  );
}

export default App;

