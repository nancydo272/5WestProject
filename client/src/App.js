import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import AddRequest from './components/AddRequest'; 
import EditRequest from './components/EditRequest'; 
import OneRequest from './components/OneRequest'; 
import AllRequests from './components/AllRequests'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/unitDashboard" element ={<AllRequests />}/>
          <Route path ="/requests/:id" element ={<OneRequest />}/>
          <Route path ="/requests/new" element ={<AddRequest />}/>
          <Route path ="/requests/:id/edit" element ={<EditRequest />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
