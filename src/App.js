
import React from 'react';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/' element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
