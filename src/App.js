import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GetData from './components/GetData';
import InsertPage from './components/InsertPage';
import MeanGrade from './components/MeanGrade';
import SearchMail from './components/SearchMail';
import './style/form.css';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/insert_data" element={<InsertPage />} />
          <Route path="/get_data" element={<GetData />} />
          <Route path="/search_mail" element={<SearchMail />} />
          <Route path="/get_mean" element={<MeanGrade />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
