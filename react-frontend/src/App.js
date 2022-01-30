import Main from './components/Main'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import FooterComponent from './components/Footer';
import CreateContact from './components/CreateContact';
import ManageContacts from './components/ManageContacts';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {<Main/>} />
          <Route path="/add" element = {<CreateContact/>} />
          <Route path="/management" element = {<ManageContacts/>} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;