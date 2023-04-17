
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './MainPage';
import AddContact from './components/Contact manager/AddContact';
import EditContact from './components/Contact manager/EditContact';
import Covidpage from './components/CovidDashboard/Covidpage';






function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/add' element={<AddContact/>}/>
        <Route path='/edit/:id' element={<EditContact/>}/>
        <Route path='/covid' element={<Covidpage/>}/>
        

      </Routes>

    </div>
  );
}

export default App;
