import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import DrawerApp from './components/drawer'
import SelectTime from './components/selectTime';
import SelectDate from './components/selectDate';
import AppointDetails from './components/appointDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [appointDate, setAppointDate] = useState('****-**-**');
  const [appointTime, setAppointTime] = useState('**:**');

  const toggleDate = (info) => {
    setAppointDate(info.dateStr);
  }

  const clearDate = () => {
    setAppointDate('****-**-**');
  }

  const toggleTime = (event) => {
    setAppointTime(event.target.textContent);
  }

  const clearTime = () => {
    setAppointTime('**:**');
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <DrawerApp />
        <Routes>
          <Route path='/' element={<SelectDate appointDate={appointDate} toggleDate={toggleDate} clearDate={clearDate} />} />
          <Route path='/chooseTimeSlot' element={<SelectTime appointDate={appointDate} appointTime={appointTime} toggleTime={toggleTime} clearTime={clearTime} />} />
          <Route path='/appointDetails' element={<AppointDetails appointDate={appointDate} appointTime={appointTime} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;