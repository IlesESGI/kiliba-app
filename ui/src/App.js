import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GetAllClients from './components/GetAllClients';
import InsertClient from './components/InsertClient';
import MeanGrade from './components/MeanGrade';
import SearchMail from './components/SearchMail';
import './style/form.css';

// Main front-end : setup one route for each API route and one homepage
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/insert_data" element={<InsertClient />} />
          <Route path="/get_all_clients" element={<GetAllClients />} />
          <Route path="/search_mail" element={<SearchMail />} />
          <Route path="/get_mean" element={<MeanGrade />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
